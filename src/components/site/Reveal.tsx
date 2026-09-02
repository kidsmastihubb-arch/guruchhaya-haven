import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "right" | "scale" | "fade";

const directionClass: Record<Direction, string> = {
  up: "reveal-up",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
  fade: "reveal",
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  as?: "div" | "section" | "article" | "li" | "figure";
}

export function Reveal({ children, className, delay = 0, direction = "fade", as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={cn(directionClass[direction], className)} style={style}>
      {children}
    </Tag>
  );
}
