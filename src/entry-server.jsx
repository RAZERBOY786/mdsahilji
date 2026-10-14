// Server-only entry used at build time to prerender the app to static HTML.
// Rendered output is injected into <div id="root"> by scripts/prerender.mjs so
// crawlers (and answer engines that don't run JavaScript) see real content.
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export function render() {
  return renderToString(<App />);
}
