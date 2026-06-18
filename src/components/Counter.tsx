"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  target: number;
  durationMs?: number;
  className?: string;
};

export default function Counter({ target, durationMs = 1600, className = "" }: CounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const startTime = performance.now();

            const step = (now: number) => {
              const progress = Math.min((now - startTime) / durationMs, 1);
              // ease-out cubic
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.floor(eased * target));
              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setValue(target);
              }
            };
            requestAnimationFrame(step);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString("pt-BR")}
    </span>
  );
}
