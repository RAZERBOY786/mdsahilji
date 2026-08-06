import { useTilt } from './useTilt';

export default function TiltCard({ as: Tag = 'div', className, style, children }) {
  const tilt = useTilt();
  return (
    <Tag
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={className}
      style={style}
    >
      {children}
    </Tag>
  );
}
