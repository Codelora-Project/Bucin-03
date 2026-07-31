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
    // Generate ~45 twinkling stars & sparkles across the viewport
    const generatedStars: Star[] = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      top: Math.random() * 95,
      left: Math.random() * 95,
      size: Math.random() * 16 + 8, // 8px to 24px
      duration: Math.random() * 3 + 2, // 2s to 5s fast/slow twinkling
      delay: Math.random() * 4,
      type: i % 3 === 0 ? 'star' : i % 3 === 1 ? 'sparkle' : 'dot'
    }));

    // Generate ~15 floating warm bokeh dots
    const generatedBokeh: BokehParticle[] = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 95,
      size: Math.random() * 10 + 6,
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 4
    }));

    setStars(generatedStars);
    setBokeh(generatedBokeh);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Rich Warm Ambient Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/90 via-orange-50/85 to-amber-100/70" />

      {/* Soft Ambient Floating Light Orbs */}
      <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-amber-300/35 filter blur-[120px] animate-warm-pulse" />
      <div className="absolute top-1/3 -right-32 w-[36rem] h-[36rem] rounded-full bg-orange-300/25 filter blur-[140px] animate-warm-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute -bottom-32 left-1/4 w-[38rem] h-[38rem] rounded-full bg-amber-400/20 filter blur-[150px] animate-warm-pulse" style={{ animationDelay: '5s' }} />

      {/* Twinkling Stars & Shimmering Sparkles Grid */}
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
            animationDelay: `${s.delay}s`
          }}
        >
          {s.type === 'star' ? (
            /* 4-Point Star SVG */
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          ) : s.type === 'sparkle' ? (
            /* Diamond Sparkle SVG */
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-amber-500 drop-shadow-[0_0_6px_rgba(245,158,11,0.8)]">
              <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
            </svg>
          ) : (
            /* Glowing Golden Dot */
            <span className="w-full h-full rounded-full bg-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.95)]" />
          )}
        </div>
      ))}

      {/* Floating Bokeh Light Particles */}
      {bokeh.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-full bg-gradient-to-t from-amber-400/50 to-amber-200/10 blur-[1px]"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `floatUp ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
            boxShadow: '0 0 12px rgba(251, 191, 36, 0.4)'
          }}
        />
      ))}

      {/* CSS Keyframe Animations */}
      <style>{`
        @keyframes twinkleSparkle {
          0%, 100% {
            opacity: 0.15;
            transform: scale(0.5) rotate(0deg);
            filter: drop-shadow(0 0 2px rgba(251, 191, 36, 0.3));
          }
          50% {
            opacity: 0.95;
            transform: scale(1.3) rotate(90deg);
            filter: drop-shadow(0 0 12px rgba(245, 158, 11, 0.95)) drop-shadow(0 0 22px rgba(251, 191, 36, 0.85));
          }
        }

        @keyframes floatUp {
          0% {
            transform: translateY(105vh) scale(0.6);
            opacity: 0;
          }
          20% {
            opacity: 0.6;
          }
          80% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-10vh) scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
