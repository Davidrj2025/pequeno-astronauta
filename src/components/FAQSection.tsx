"use client";

import { useState } from "react";
import { faq } from "@/data/content";
import Reveal from "./Reveal";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-nebula py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
        <Reveal className="text-center">
          <span className="section-eyebrow">Antes da decolagem</span>
          <h2 className="mt-3 font-display text-3xl font-700 text-dust sm:text-4xl">
            Perguntas frequentes
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.pergunta} delayMs={i * 50}>
                <div
                  className={`rounded-2xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-star/40 bg-nebula-light/60"
                      : "border-dust/10 bg-nebula-light/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <span className="font-display text-[0.95rem] font-600 text-dust sm:text-base">
                      {item.pergunta}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-star/40 text-star transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-dust-muted sm:px-6 sm:pb-6">
                        {item.resposta}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
