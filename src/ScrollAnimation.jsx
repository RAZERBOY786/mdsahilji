import { useEffect, useRef, useState } from 'react';
import { ScrollProgressProvider } from './ScrollProgressContext';
import { usePrefersReducedMotion } from './useMediaQuery';
import BootLoader from './components/BootLoader';

const FRAME_COUNT = 300; // frames 002..300 (missing ones are auto-detected)
const FIRST_FRAME = 2; // ezgif-frame-002.jpg to ezgif-frame-300.jpg
// Relative path so it works from any base (dev, file://, sub-folder hosting)
const FRAMES_DIR = 'frames-web/';
const PRELOAD_CONCURRENCY = 6;
const MIN_LOADER_MS = 3000; // loading screen shows for at least 3 seconds
const MAX_FRAME_W = 3840; // source frames are 4K — render at full resolution
const MAX_FRAME_H = 2160;

function getFrameFilename(index) {
  const frameNum = index + FIRST_FRAME;
  const paddedNum = String(frameNum).padStart(3, '0');
  return `${FRAMES_DIR}ezgif-frame-${paddedNum}.jpg`;
}

export default function ScrollAnimation({ children }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const framesRef = useRef([]); // Pre-rendered screen-optimized ImageBitmaps
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const drawnFrameRef = useRef(-1);
  const rafIdRef = useRef(null);
  const isVisibleRef = useRef(true);
  const reducedMotionRef = useRef(false);
  const isReadyRef = useRef(false);

  const prefersReducedMotion = usePrefersReducedMotion();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    reducedMotionRef.current = prefersReducedMotion;
  }, [prefersReducedMotion]);

  useEffect(() => {
    // Document reset
    document.documentElement.style.backgroundColor = '#000';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.documentElement.style.overflowX = 'hidden';

    document.body.style.backgroundColor = '#000';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflowX = 'hidden';

    // Target prerender resolution, aspect-preserved and capped at the source's
    // full 4K resolution so frames render 1:1 sharp (no upscaling) without
    // pixelating on high-DPI displays (DPR capped at 2 to balance crispness + speed).
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const viewW = Math.round(window.innerWidth * dpr);
    const viewH = Math.round(window.innerHeight * dpr);
    const capScale = Math.min(1, MAX_FRAME_W / viewW, MAX_FRAME_H / viewH);
    const targetW = Math.max(1, Math.round(viewW * capScale));
    const targetH = Math.max(1, Math.round(viewH * capScale));

    // Shared offscreen canvas for pre-rendering
    const offscreen = document.createElement('canvas');
    offscreen.width = targetW;
    offscreen.height = targetH;
    const offCtx = offscreen.getContext('2d', { alpha: false });

    // 1. Pooled Preloader & Offscreen GPU Pre-rendering Pipeline
    let loadedCount = 0;
    let nextToLoad = 0;
    let highestLoaded = 0; // highest frame index+1 that actually exists on disk
    const frameBitmaps = new Array(FRAME_COUNT);
    const pendingImages = [];

    const startedAt = Date.now();
    let readyScheduled = false;
    const scheduleReady = () => {
      if (readyScheduled || isReadyRef.current) return;
      readyScheduled = true;
      const wait = Math.max(0, MIN_LOADER_MS - (Date.now() - startedAt));
      setTimeout(() => {
        isReadyRef.current = true;
        setIsReady(true);
      }, wait);
    };

    const handleSingleLoad = () => {
      loadedCount++;
      setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));

      if (!isReadyRef.current && loadedCount >= 30) {
        scheduleReady();
      }

      if (loadedCount === FRAME_COUNT) {
        setIsLoaded(true);
      }
    };

    const loadOne = () => {
      const i = nextToLoad;
      if (i >= FRAME_COUNT) return;
      nextToLoad++;

      const loadAttempt = (attempt) => {
        const img = new Image();
        img.decoding = 'async';
        img.src =
          attempt === 0
            ? getFrameFilename(i)
            : `frames/ezgif-frame-${String(i + FIRST_FRAME).padStart(3, '0')}.jpg`;
        pendingImages.push(img);

        img.onload = async () => {
          try {
            if (img.decode) {
              try {
                await img.decode();
              } catch {}
            }

            // Cover-fit draw onto offscreen canvas
            const iw = img.naturalWidth || 1280;
            const ih = img.naturalHeight || 720;
            const scale = Math.max(targetW / iw, targetH / ih);
            const dw = iw * scale;
            const dh = ih * scale;
            const dx = (targetW - dw) / 2;
            const dy = (targetH - dh) / 2;

            offCtx.fillStyle = '#000';
            offCtx.fillRect(0, 0, targetW, targetH);
            offCtx.drawImage(img, dx, dy, dw, dh);

            // Convert to direct 1:1 GPU ImageBitmap
            if ('createImageBitmap' in window) {
              const bitmap = await createImageBitmap(offscreen);
              frameBitmaps[i] = bitmap;
            } else {
              frameBitmaps[i] = img;
            }
          } catch {
            frameBitmaps[i] = img;
          }
          if (i + 1 > highestLoaded) highestLoaded = i + 1;
          handleSingleLoad();
          loadOne();
        };

        img.onerror = () => {
          if (attempt === 0) {
            loadAttempt(1);
          } else {
            frameBitmaps[i] = null;
            handleSingleLoad();
            loadOne();
          }
        };
      };

      loadAttempt(0);
    };

    for (let k = 0; k < PRELOAD_CONCURRENCY; k++) {
      loadOne();
    }
    framesRef.current = frameBitmaps;

    // 2. Direct Ultra-Fast Blit Canvas Draw (<0.1ms per frame)
    const drawFrame = (frameIndex) => {
      const canvas = canvasRef.current;
      if (!canvas) return false;
      const ctx = canvas.getContext('2d', { alpha: false });
      if (!ctx) return false;

      // While frames are still streaming in, fall back to the nearest
      // frame that has already decoded so the canvas is never blank.
      let drawIndex = frameIndex;
      let bitmap = framesRef.current[frameIndex];
      if (!bitmap) {
        for (let offset = 1; offset < FRAME_COUNT; offset++) {
          const prev = framesRef.current[frameIndex - offset];
          const next = framesRef.current[frameIndex + offset];
          if (prev) {
            bitmap = prev;
            drawIndex = frameIndex - offset;
            break;
          }
          if (next) {
            bitmap = next;
            drawIndex = frameIndex + offset;
            break;
          }
        }
      }
      if (!bitmap) return false;

      // Direct GPU blit - 0ms CPU overhead
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);

      return drawIndex;
    };

    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const dprVal = Math.min(window.devicePixelRatio || 1, 2);
      const displayW = window.innerWidth;
      const displayH = window.innerHeight;

      const capS = Math.min(1, MAX_FRAME_W / Math.round(displayW * dprVal), MAX_FRAME_H / Math.round(displayH * dprVal));
      const pixelW = Math.max(1, Math.round(displayW * dprVal * capS));
      const pixelH = Math.max(1, Math.round(displayH * dprVal * capS));
      if (canvas.width !== pixelW || canvas.height !== pixelH) {
        canvas.width = pixelW;
        canvas.height = pixelH;
      }
      drawnFrameRef.current = -1; // Force immediate redraw
    };

    // 3. Precise Scroll Mapping (across the entire page)
    const updateTargetFrame = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / totalScrollable));
      // Map scroll across only the frames that actually exist, so the scrub
      // auto-extends as more frames (up to 300) are added.
      const framesAvailable = Math.max(1, Math.min(FRAME_COUNT, highestLoaded));
      targetFrameRef.current = progress * (framesAvailable - 1);
    };

    // 4. Silky 120fps Smooth Momentum Lerp
    const renderLoop = () => {
      if (isVisibleRef.current) {
        const diff = targetFrameRef.current - currentFrameRef.current;
        const lerpFactor = reducedMotionRef.current ? 1 : 0.35; // instant snap if reduced motion is requested

        if (Math.abs(diff) > 0.001) {
          currentFrameRef.current += diff * lerpFactor;
        } else {
          currentFrameRef.current = targetFrameRef.current;
        }

        const frameToDraw = Math.min(
          FRAME_COUNT - 1,
          Math.max(0, Math.round(currentFrameRef.current))
        );

        if (frameToDraw !== drawnFrameRef.current) {
          const painted = drawFrame(frameToDraw);
          if (painted !== false) {
            drawnFrameRef.current = painted;
          }
        }

        rafIdRef.current = requestAnimationFrame(renderLoop);
      } else {
        rafIdRef.current = null;
      }
    };

    const startLoop = () => {
      if (!rafIdRef.current) {
        rafIdRef.current = requestAnimationFrame(renderLoop);
      }
    };

    const stopLoop = () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };

    // 5. IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          updateTargetFrame();
          resizeCanvas();
          startLoop();
        } else {
          stopLoop();
        }
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Coalesce scroll events into a single layout read per animation frame
    // (getBoundingClientRect on a huge scroll container is expensive — doing it
    // once per rAF instead of once per scroll event removes scroll jank).
    let scrollRaf = null;
    const handleScroll = () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = null;
        updateTargetFrame();
      });
    };

    const handleResize = () => {
      resizeCanvas();
      updateTargetFrame();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    resizeCanvas();
    updateTargetFrame();

    // Never trap the page behind the loader — reveal after 6s no matter what
    const loaderTimeout = setTimeout(() => {
      scheduleReady();
    }, 6000);

    return () => {
      clearTimeout(loaderTimeout);
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
      observer.disconnect();
      stopLoop();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      pendingImages.forEach((img) => {
        img.onload = null;
        img.onerror = null;
        img.src = '';
      });
      framesRef.current.forEach((b) => {
        if (b && typeof b.close === 'function') b.close();
      });
    };
  }, []);

  useEffect(() => {
    if (isLoaded && canvasRef.current) {
      drawnFrameRef.current = -1;
    }
  }, [isLoaded]);

  useEffect(() => {
    if (isReady) {
      const t = setTimeout(() => setHideLoader(true), 950);
      return () => clearTimeout(t);
    }
  }, [isReady]);

  return (
    <ScrollProgressProvider containerRef={containerRef}>
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '400vh',
          backgroundColor: '#000',
        }}
      >
        {/* Full-Page Fixed Background Canvas (behind all sections) */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            zIndex: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(circle at 70% 25%, rgba(56,189,248,0.10), transparent 50%), radial-gradient(circle at 20% 80%, rgba(65,105,225,0.10), transparent 50%), #000',
          }}
        >
          <canvas
            ref={canvasRef}
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              backgroundColor: '#000',
            }}
          />
        </div>

        {/* Loading overlay — interactive CS boot terminal, then pushes up to reveal the page */}
        {!hideLoader && (
        <div
          aria-hidden={isReady}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#060d22',
            transform: isReady ? 'translateY(-100%)' : 'translateY(0)',
            pointerEvents: isReady ? 'none' : 'auto',
            transition: 'transform 0.8s cubic-bezier(0.65, 0, 0.35, 1)',
          }}
        >
          <BootLoader progress={loadProgress} />
        </div>
        )}

        {/* All page sections live on top of the scrolling animation */}
        <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
      </div>
    </ScrollProgressProvider>
  );
 }
