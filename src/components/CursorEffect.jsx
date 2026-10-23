import React, { useEffect, useState } from 'react';

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Only enable on pointer/desktop devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setIsMounted(true);

    let animationFrameId;

    const handleMouseMove = (e) => {
      // Smooth tracking
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseOver = (e) => {
      const isInteractive = Boolean(
        e.target.closest('button, a, input, select, textarea, .interactive-card')
      );
      setIsHovered(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
      aria-hidden="true"
    >
      {/* 
        Ultra-subtle ambient spotlight that tracks the mouse.
        Soft gradient that gently highlights content without blocking the real cursor.
      */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(${
            isHovered ? '650px' : '450px'
          } circle at ${position.x}px ${position.y}px, rgba(37, 99, 235, ${
            isHovered ? '0.06' : '0.035'
          }), transparent 75%)`,
        }}
      />
    </div>
  );
}
