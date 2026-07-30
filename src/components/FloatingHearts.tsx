import React, { useEffect, useState } from 'react';

interface LightParticle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

export const FloatingHearts: React.FC = () => {
  const [particles, setParticles] = useState<LightParticle[]>([]);

  useEffect(() => {
    const generatedParticles: LightParticle[] = Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      left: Math.random() * 95,
      size: Math.random() * 12 + 6, // 6px to 18px bokeh light dots
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }));

    setParticles(generatedParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Soft Ambient Warm Light Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-200/20 filter blur-[100px] animate-warm-pulse" />
      <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full bg-orange-200/20 filter blur-[120px] animate-warm-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute -bottom-32 left-1/4 w-[32rem] h-[32rem] rounded-full bg-amber-300/15 filter blur-[130px] animate-warm-pulse" style={{ animationDelay: '5s' }} />

      {/* Minimal Bokeh Light Particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-full bg-gradient-to-t from-amber-300/40 to-amber-100/10 blur-[1px]"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `floatUp ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
            boxShadow: '0 0 12px rgba(251, 191, 36, 0.3)'
          }}
        />
      ))}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(105vh) scale(0.6);
            opacity: 0;
          }
          20% {
            opacity: 0.5;
          }
          80% {
            opacity: 0.5;
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
