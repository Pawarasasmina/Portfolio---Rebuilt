import { useEffect, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add new trail point
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++
      };

      setTrail(prevTrail => {
        const newTrail = [...prevTrail, newPoint];
        // Keep only the last 15 points
        return newTrail.slice(-15);
      });
    };

    const animateTrail = () => {
      setTrail(prevTrail => 
        prevTrail.map(point => ({
          ...point,
          // Fade out older points
        })).filter((_, index, array) => index >= array.length - 10)
      );
      animationFrameId = requestAnimationFrame(animateTrail);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(animateTrail);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor glow */}
      <div
        className="absolute w-4 h-4 bg-neon-cyan rounded-full opacity-80 blur-sm transition-all duration-75"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          boxShadow: '0 0 20px #00FFFF, 0 0 40px #00FFFF'
        }}
      ></div>

      {/* Trail points */}
      {trail.map((point, index) => {
        const opacity = (index + 1) / trail.length;
        const scale = opacity;
        return (
          <div
            key={point.id}
            className="absolute w-2 h-2 bg-neon-magenta rounded-full transition-all duration-300"
            style={{
              left: point.x - 4,
              top: point.y - 4,
              opacity: opacity * 0.6,
              transform: `scale(${scale})`,
              boxShadow: `0 0 ${10 * opacity}px #FF00FF`
            }}
          ></div>
        );
      })}

      {/* Outer ring */}
      <div
        className="absolute w-8 h-8 border border-neon-cyan rounded-full opacity-40 transition-all duration-100"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
      ></div>
    </div>
  );
};

export default CursorTrail;
