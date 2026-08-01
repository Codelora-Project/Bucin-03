import React, { useEffect, useRef } from 'react';

// Ultra-Crisp Lightweight Pixel Art Golden Star matching user reference image
const PixelStarIcon: React.FC<{ size?: number; className?: string }> = ({ size = 32, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ shapeRendering: 'crispEdges' }}
    className={className}
  >
    {/* Outer Dark Pixel Brown Outline */}
    {/* Top Tip Outline */}
    <rect x="11" y="0" width="2" height="1" fill="#59340B" />
    <rect x="10" y="1" width="1" height="2" fill="#59340B" />
    <rect x="13" y="1" width="1" height="2" fill="#59340B" />
    <rect x="9" y="3" width="1" height="2" fill="#59340B" />
    <rect x="14" y="3" width="1" height="2" fill="#59340B" />
    <rect x="8" y="5" width="1" height="1" fill="#59340B" />
    <rect x="15" y="5" width="1" height="1" fill="#59340B" />

    {/* Left Horizontal Arm Outline */}
    <rect x="1" y="6" width="7" height="1" fill="#59340B" />
    <rect x="0" y="7" width="1" height="3" fill="#59340B" />
    <rect x="1" y="10" width="4" height="1" fill="#59340B" />
    <rect x="4" y="11" width="1" height="2" fill="#59340B" />
    <rect x="5" y="13" width="1" height="2" fill="#59340B" />

    {/* Right Horizontal Arm Outline */}
    <rect x="16" y="6" width="7" height="1" fill="#59340B" />
    <rect x="23" y="7" width="1" height="3" fill="#59340B" />
    <rect x="19" y="10" width="4" height="1" fill="#59340B" />
    <rect x="19" y="11" width="1" height="2" fill="#59340B" />
    <rect x="18" y="13" width="1" height="2" fill="#59340B" />

    {/* Center Bottom Crotch Outline */}
    <rect x="11" y="15" width="2" height="1" fill="#59340B" />

    {/* Left Leg Outline */}
    <rect x="6" y="15" width="2" height="1" fill="#59340B" />
    <rect x="5" y="16" width="1" height="3" fill="#59340B" />
    <rect x="4" y="19" width="1" height="3" fill="#59340B" />
    <rect x="5" y="22" width="5" height="1" fill="#59340B" />
    <rect x="10" y="19" width="1" height="3" fill="#59340B" />
    <rect x="9" y="16" width="1" height="3" fill="#59340B" />

    {/* Right Leg Outline */}
    <rect x="16" y="15" width="2" height="1" fill="#59340B" />
    <rect x="18" y="16" width="1" height="3" fill="#59340B" />
    <rect x="19" y="19" width="1" height="3" fill="#59340B" />
    <rect x="14" y="22" width="5" height="1" fill="#59340B" />
    <rect x="13" y="19" width="1" height="3" fill="#59340B" />
    <rect x="14" y="16" width="1" height="3" fill="#59340B" />

    {/* Main Yellow Body Fill */}
    <rect x="11" y="1" width="2" height="2" fill="#FFDE6A" />
    <rect x="10" y="3" width="4" height="2" fill="#FFDE6A" />
    <rect x="9" y="5" width="6" height="1" fill="#FFDE6A" />
    <rect x="1" y="7" width="22" height="3" fill="#FFDE6A" />
    <rect x="5" y="10" width="14" height="1" fill="#FFDE6A" />
    <rect x="5" y="11" width="14" height="2" fill="#FFDE6A" />
    <rect x="6" y="13" width="12" height="2" fill="#FFDE6A" />

    {/* Left Leg Fill */}
    <rect x="6" y="16" width="3" height="3" fill="#FFDE6A" />
    <rect x="5" y="19" width="5" height="3" fill="#FFDE6A" />

    {/* Right Leg Fill */}
    <rect x="15" y="16" width="3" height="3" fill="#FFDE6A" />
    <rect x="14" y="19" width="5" height="3" fill="#FFDE6A" />

    {/* Top-Left Sheen & Highlights (White and Pale Cream) */}
    <rect x="11" y="1" width="1" height="2" fill="#FFFDF0" />
    <rect x="10" y="3" width="2" height="2" fill="#FFFDF0" />
    <rect x="9" y="5" width="2" height="1" fill="#FFFDF0" />
    <rect x="4" y="7" width="7" height="1" fill="#FFFDF0" />
    <rect x="11" y="7" width="1" height="1" fill="#FFFFFF" />
    <rect x="12" y="7" width="1" height="1" fill="#FFFDF0" />
    <rect x="5" y="8" width="5" height="1" fill="#FFFDF0" />
    <rect x="10" y="8" width="2" height="1" fill="#FFFFFF" />

    {/* Bottom-Right Shading (Warm Golden Accent) */}
    <rect x="17" y="7" width="6" height="1" fill="#F0B832" />
    <rect x="18" y="8" width="5" height="2" fill="#F0B832" />
    <rect x="14" y="11" width="5" height="2" fill="#F0B832" />
    <rect x="13" y="13" width="5" height="2" fill="#F0B832" />
    <rect x="16" y="16" width="2" height="3" fill="#F0B832" />
    <rect x="16" y="19" width="3" height="3" fill="#F0B832" />
    <rect x="7" y="19" width="3" height="3" fill="#F0B832" />
  </svg>
);

interface CanvasParticle {
  x: number;
  y: number;
  size: number;
  color: string;
  type: 'star' | 'diamond' | 'cross' | 'dot';
  vx: number;
  vy: number;
  opacity: number;
  rotation: number;
  vRot: number;
  maxLife: number;
  life: number;
}

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const posRef = useRef({ x: -100, y: -100 });
  const isHoveredRef = useRef(false);
  const isClickedRef = useRef(false);
  const isVisibleRef = useRef(false);
  const lastSpawnPosRef = useRef({ x: -100, y: -100 });

  const particlesRef = useRef<CanvasParticle[]>([]);
  const animFrameRef = useRef<number | null>(null);

  const sparkleColors = ['#FFE770', '#FFF8D6', '#FFFFFF', '#FFC107', '#F59E0B'];
  const sparkleTypes: CanvasParticle['type'][] = ['star', 'diamond', 'cross', 'dot'];

  const createParticle = (x: number, y: number, isBurst = false): CanvasParticle => {
    const angle = Math.random() * Math.PI * 2;
    const speed = isBurst ? 1.5 + Math.random() * 3 : 0.3 + Math.random() * 0.7;
    const life = isBurst ? 25 + Math.random() * 15 : 18 + Math.random() * 14;

    return {
      x: x + (Math.random() - 0.5) * (isBurst ? 10 : 6),
      y: y + (Math.random() - 0.5) * (isBurst ? 10 : 6),
      size: Math.floor(Math.random() * 5) + (isBurst ? 7 : 4),
      color: sparkleColors[Math.floor(Math.random() * sparkleColors.length)],
      type: sparkleTypes[Math.floor(Math.random() * sparkleTypes.length)],
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed + (isBurst ? 0 : 0.3),
      opacity: 1,
      rotation: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.15,
      maxLife: life,
      life: life,
    };
  };

  const updateCursorDOM = () => {
    if (!cursorRef.current) return;
    const { x, y } = posRef.current;
    const isHovered = isHoveredRef.current;
    const isClicked = isClickedRef.current;
    const isVisible = isVisibleRef.current;

    const scale = isClicked ? 0.8 : isHovered ? 1.2 : 1;

    cursorRef.current.style.opacity = isVisible ? '1' : '0';
    // Pure GPU transform update without expensive JS filter manipulation!
    cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      posRef.current = { x, y };
      if (!isVisibleRef.current) isVisibleRef.current = true;

      updateCursorDOM();

      // Throttled stardust particle spawn distance (> 18px) for maximum performance
      const dx = x - lastSpawnPosRef.current.x;
      const dy = y - lastSpawnPosRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 18) {
        particlesRef.current.push(createParticle(x, y));
        lastSpawnPosRef.current = { x, y };
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      isClickedRef.current = true;
      updateCursorDOM();

      // Lightweight click burst
      for (let i = 0; i < 10; i++) {
        particlesRef.current.push(createParticle(e.clientX, e.clientY, true));
      }
    };

    const handleMouseUp = () => {
      isClickedRef.current = false;
      updateCursorDOM();
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      updateCursorDOM();
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      updateCursorDOM();
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = Boolean(
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.cursor-pointer') ||
        target.classList?.contains('cursor-pointer')
      );

      if (isInteractive !== isHoveredRef.current) {
        isHoveredRef.current = isInteractive;
        updateCursorDOM();
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    const ctx = canvas.getContext('2d');
    let lastTime = performance.now();

    const render = (now: number) => {
      const delta = Math.min((now - lastTime) / 16.66, 2);
      lastTime = now;

      if (ctx && particlesRef.current.length > 0) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        const activeParticles: CanvasParticle[] = [];

        for (let i = 0; i < particlesRef.current.length; i++) {
          const p = particlesRef.current[i];
          p.life -= delta;

          if (p.life > 0) {
            const lifeRatio = p.life / p.maxLife;

            p.x += p.vx * delta;
            p.y += p.vy * delta;
            p.rotation += p.vRot * delta;
            p.opacity = Math.max(0, lifeRatio);

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.globalAlpha = p.opacity;

            if (p.type === 'star') {
              ctx.fillStyle = p.color;
              const s = Math.max(1, Math.floor(p.size / 4));
              ctx.fillRect(-s, -s * 2, s * 2, s * 4);
              ctx.fillRect(-s * 2, -s, s * 4, s * 2);
              ctx.fillStyle = '#FFFFFF';
              ctx.fillRect(-Math.floor(s / 2), -Math.floor(s / 2), Math.max(1, s), Math.max(1, s));
            } else if (p.type === 'diamond') {
              ctx.fillStyle = p.color;
              const s = Math.max(1, Math.floor(p.size / 3));
              ctx.fillRect(-s, -s * 2, s * 2, s * 4);
              ctx.fillRect(-s * 2, -s, s * 4, s * 2);
            } else if (p.type === 'cross') {
              ctx.fillStyle = p.color;
              const s = Math.max(1, Math.floor(p.size / 4));
              ctx.fillRect(-s, -s * 2, s * 2, s * 4);
              ctx.fillRect(-s * 2, -s, s * 4, s * 2);
            } else {
              ctx.fillStyle = p.color;
              const s = Math.max(2, Math.floor(p.size * lifeRatio));
              ctx.fillRect(-s / 2, -s / 2, s, s);
            }

            ctx.restore();
            activeParticles.push(p);
          }
        }

        // Strictly capped at 25 particles for 0-overhead performance
        particlesRef.current = activeParticles.slice(-25);
      } else if (ctx) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[999998]"
        style={{ pointerEvents: 'none' }}
      />
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[999999] transition-transform duration-75 ease-out opacity-0"
        style={{
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      >
        <PixelStarIcon size={28} />
      </div>
    </>
  );
};

export default CustomCursor;
