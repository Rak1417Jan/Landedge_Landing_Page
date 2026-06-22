import { useState, useEffect, useRef, ReactNode } from "react";

export type AnimationType = "fade-in" | "slide-up" | "scale-up" | "slide-left" | "slide-right";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  duration?: number; // ms
  delay?: number; // ms
  threshold?: number;
  once?: boolean;
  className?: string;
}

export function ScrollReveal({
  children,
  animation = "slide-up",
  duration = 750,
  delay = 0,
  threshold = 0.1,
  once = true,
  className = "",
}: ScrollRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (once && observer) {
            observer.unobserve(el);
          }
        } else if (!once) {
          setIsRevealed(false);
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold, once]);

  const getAnimationStyles = (): React.CSSProperties => {
    const style: React.CSSProperties = {
      transitionProperty: "opacity, transform",
      transitionDuration: `${duration}ms`,
      transitionDelay: `${delay}ms`,
      transitionTimingFunction: "cubic-bezier(0.215, 0.610, 0.355, 1)", // Premium easeOutCubic
      willChange: "transform, opacity",
    };

    if (!isRevealed) {
      style.opacity = 0;
      if (animation === "slide-up") {
        style.transform = "translate3d(0, 40px, 0)";
      } else if (animation === "scale-up") {
        style.transform = "translate3d(0, 20px, 0) scale(0.96)";
      } else if (animation === "slide-left") {
        style.transform = "translate3d(40px, 0, 0)";
      } else if (animation === "slide-right") {
        style.transform = "translate3d(-40px, 0, 0)";
      } else if (animation === "fade-in") {
        style.transform = "translate3d(0, 0, 0)";
      }
    } else {
      style.opacity = 1;
      style.transform = "translate3d(0, 0, 0) scale(1)";
    }

    return style;
  };

  return (
    <div ref={ref} style={getAnimationStyles()} className={className}>
      {children}
    </div>
  );
}
