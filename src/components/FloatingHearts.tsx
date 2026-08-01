import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  type: 'star' | 'sparkle' | 'dot';
}

interface BokehParticle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

export const FloatingHearts: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [bokeh, setBokeh] = useState<BokehParticle[]>([]);

  useEffect(() => {
    // Generate lightweight twinkling stars (20 stars for supreme performance)
    const generatedStars: Star[] = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      top: Math.random() * 95,
      left: Math.random() * 95,
      size: Math.random() * 10 + 8,
      duration: Math.random() * 3 + 2.5,
      delay: Math.random() * 3,
      type: i % 3 === 0 ? 'star' : i % 3 === 1 ? 'sparkle' : 'dot',
    }));

    // Generate floating bokeh particles (8 particles)
    const generatedBokeh: BokehParticle[] = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: Math.random() * 95,
      size: Math.random() * 8 + 6,
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 4,
    }));

    setStars(generatedStars);
    setBokeh(generatedBokeh);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Warm Ambient Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/90 via-orange-50/85 to-amber-100/70" />

      {/* Lightweight Radial Ambient Orbs (Using pure CSS radial-gradient instead of heavy GPU Gaussian blur filters) */}
      <div
        className="absolute -top-32 -left-32 w-[30rem] h-[30rem] rounded-full opacity-40 animate-warm-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, rgba(251, 191, 36, 0) 70%)',
        }}
      />
      <div
        className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] rounded-full opacity-35 animate-warm-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.35) 0%, rgba(249, 115, 22, 0) 70%)',
          animationDelay: '3s',
        }}
      />
      <div
        className="absolute -bottom-32 left-1/4 w-[34rem] h-[34rem] rounded-full opacity-30 animate-warm-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, rgba(245, 158, 11, 0) 70%)',
          animationDelay: '5s',
        }}
      />

      {/* Twinkling Stars Grid */}
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute flex items-center justify-center text-amber-500/90"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animation: `twinkleSparkle ${s.duration}s ease-in-out infinite`,
            animationDelay: `${s.delay}s`,
            willChange: 'transform, opacity',
          }}
        >
          {s.type === 'star' ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-amber-400">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          ) : s.type === 'sparkle' ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-amber-500">
              <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
            </svg>
          ) : (
            <span className="w-full h-full rounded-full bg-amber-300/90" />
          )}
        </div>
      ))}

      {/* Floating Bokeh Light Particles */}
      {bokeh.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-full bg-amber-300/40"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `floatUp ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
            willChange: 'transform, opacity',
          }}
        />
      ))}

      {/* Lightweight CSS Animations */}
      <style>{`
        @keyframes twinkleSparkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.6);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.1);
          }
        }

        @keyframes floatUp {
          0% {
            transform: translateY(105vh) scale(0.6);
            opacity: 0;
          }
          20%, 80% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-10vh) scale(1.1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
