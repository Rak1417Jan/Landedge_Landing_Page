import { useRef, useState, useEffect } from "react";

export interface TiltOptions {
  max?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  easing?: string;
  glare?: boolean;
  maxGlare?: number;
}

export function use3DTilt(options: TiltOptions = {}) {
  const {
    max = 8, // Degrees
    perspective = 1000,
    scale = 1.03, // Slight scale up
    speed = 300,
    easing = "cubic-bezier(.03,.98,.52,.99)",
    glare = true,
    maxGlare = 0.25,
  } = options;

  const elementRef = useRef<HTMLDivElement | null>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    opacity: 0,
    borderRadius: "inherit",
    zIndex: 5,
    background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 80%)",
    transition: `opacity ${speed}ms ${easing}`,
  });

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate relative positions (-0.5 to 0.5)
      const px = x / width - 0.5;
      const py = y / height - 0.5;

      // Calculate tilt angles
      const rotateX = -(py * max);
      const rotateY = px * max;

      setTiltStyle({
        transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: "transform 100ms ease-out",
        transformStyle: "preserve-3d",
      });

      if (glare) {
        const glareX = (x / width) * 100;
        const glareY = (y / height) * 100;
        // Calculate dynamic opacity based on how far cursor is from center
        const distance = Math.sqrt(px * px + py * py); // max is sqrt(0.5^2 + 0.5^2) = ~0.707
        const glareOpacity = (distance / 0.707) * maxGlare;
        
        setGlareStyle((prev) => ({
          ...prev,
          opacity: Math.min(glareOpacity, maxGlare),
          background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 65%)`,
          transition: "none", // Instant tracking for high performance
        }));
      }
    };

    const handleMouseLeave = () => {
      setTiltStyle({
        transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        transition: `transform ${speed}ms ${easing}`,
      });

      if (glare) {
        setGlareStyle((prev) => ({
          ...prev,
          opacity: 0,
          transition: `opacity ${speed}ms ${easing}`,
        }));
      }
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [max, perspective, scale, speed, easing, glare, maxGlare]);

  return { elementRef, tiltStyle, glareStyle };
}
