import StarField from "./StarField";
import Reveal from "./Reveal";
import { linkWhatsapp, SITE } from "@/data/content";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cosmos to-nebula-deep py-20 sm:py-28">
      <StarField className="opacity-40" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-star/50 to-transparent"
      />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8 lg:px-12">
        <Reveal>
          <span className="section-eyebrow">Sua missão começa agora</span>
          <h2 className="mt-3 font-display text-3xl font-700 leading-tight text-dust text-balance sm:text-4xl">
            Dê ao seu pequeno astronauta uma lembrança para a vida toda
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-dust-muted">
            Envie a foto agora pelo WhatsApp e receba a prévia da ilustração
            ainda esta semana.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-1">
            <span className="font-mono text-sm text-dust-muted line-through">
              {SITE.precoDe}
            </span>
            <span className="font-display text-4xl font-700 text-star">
              {SITE.precoPor}
            </span>
            <span className="font-mono text-xs text-dust-muted">
              à vista, frete calculado no WhatsApp
            </span>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={linkWhatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Z" />
              </svg>
              Fazer meu pedido no WhatsApp
            </a>
          </div>

          <p className="mt-5 font-mono text-xs text-dust-muted">
            Vagas de produção limitadas por semana para garantir qualidade
            artesanal.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
