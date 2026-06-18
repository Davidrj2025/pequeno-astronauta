"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { depoimentos } from "@/data/content";

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const total = depoimentos.length;

  const goTo = useCallback(
    (i: number) => {
      const next = (i + total) % total;
      setIndex(next);
    },
    [total]
  );

  // autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      goTo(index + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [index, goTo]);

  return (
    <section className="relative overflow-hidden bg-nebula-light/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Diário de bordo das famílias</span>
          <h2 className="mt-3 font-display text-3xl font-700 text-dust sm:text-4xl">
            O que os pais estão dizendo
          </h2>
        </div>

        <div className="relative mt-12">
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {depoimentos.map((dep) => (
                <div
                  key={dep.nome}
                  className="flex w-full flex-shrink-0 justify-center px-2 sm:px-4"
                >
                  <div className="w-full max-w-md rounded-3xl border border-dust/10 bg-nebula-deep p-7 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] sm:p-8">
                    <div className="flex items-center gap-1 text-star">
                      {Array.from({ length: dep.nota }).map((_, i) => (
                        <span key={i} aria-hidden="true">
                          ★
                        </span>
                      ))}
                      <span className="sr-only">{dep.nota} de 5 estrelas</span>
                    </div>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-dust-muted">
                      “{dep.texto}”
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cosmos font-display text-sm font-600 text-dust">
                        {dep.nome.charAt(0)}
                      </div>
                      <div>
                        <p className="font-display text-sm font-600 text-dust">
                          {dep.nome}
                        </p>
                        <p className="font-mono text-xs text-dust-muted">
                          {dep.cidade}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controles */}
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Depoimento anterior"
            className="absolute left-0 top-1/2 hidden -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-dust/20 bg-nebula-deep/80 p-3 text-dust transition-colors hover:border-star/50 hover:text-star sm:flex"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Próximo depoimento"
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-4 items-center justify-center rounded-full border border-dust/20 bg-nebula-deep/80 p-3 text-dust transition-colors hover:border-star/50 hover:text-star sm:flex"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {depoimentos.map((dep, i) => (
            <button
              key={dep.nome}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir para depoimento ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-7 bg-star" : "w-2 bg-dust/25 hover:bg-dust/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
