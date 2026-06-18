import StarField from "./StarField";
import Counter from "./Counter";
import { linkWhatsapp, SITE } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-nebula pb-20 pt-32 sm:pb-28 sm:pt-36">
      <StarField />
      <div className="absolute inset-0 bg-nebula-glow" aria-hidden="true" />

      {/* Planeta decorativo */}
      <div
        aria-hidden="true"
        className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-cosmos-light to-nebula opacity-60 blur-[2px] sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="absolute -right-10 top-24 h-72 w-72 -rotate-12 rounded-full border border-star/30 sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-5 sm:px-8 lg:flex-row lg:gap-16 lg:px-12">
        {/* Coluna de texto */}
        <div className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
          <span className="section-eyebrow mb-5 rounded-full border border-star/30 bg-star/10 px-4 py-1.5">
            ★ Ilustração personalizada · Entrega em todo o Brasil
          </span>

          <h1 className="font-display text-4xl font-700 leading-[1.08] tracking-tight text-dust text-balance sm:text-5xl lg:text-[3.4rem]">
            Transforme seu filho em um{" "}
            <span className="text-star">astronauta</span> em sua própria
            missão espacial
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-dust-muted sm:text-lg">
            Envie uma foto, escolha o traje e o nome da missão. Em poucos
            dias, vocês recebem em casa uma ilustração exclusiva, pronta para
            emoldurar e virar a peça favorita do quarto.
          </p>

          <div className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
            <a href={linkWhatsapp()} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
              <span>Fazer meu pedido</span>
              <span aria-hidden="true">→</span>
            </a>
            <a href="#galeria" className="btn-ghost w-full sm:w-auto">
              Ver exemplos reais
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3 font-mono text-sm text-dust-muted">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-star/15 text-star">
              ★
            </span>
            <p>
              <Counter
                target={SITE.clientesAtendidos}
                className="font-700 text-dust"
              />{" "}
              famílias já criaram a missão do seu pequeno astronauta
            </p>
          </div>
        </div>

        {/* Coluna visual: "crachá" de astronauta */}
        <div className="relative flex w-full justify-center lg:w-1/2">
          <div className="badge-card relative w-full max-w-sm animate-float bg-gradient-to-b from-cosmos to-nebula-light p-1.5 shadow-[0_30px_60px_-15px_rgba(61,44,141,0.5)]">
            <div className="badge-card flex flex-col items-center gap-4 bg-nebula-deep px-8 py-10">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-star/40 bg-cosmos/40 text-5xl">
                👧🚀
              </div>
              <div className="text-center">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-star/80">
                  Identificação da missão
                </p>
                <p className="mt-1 font-display text-2xl font-600 text-dust">
                  Helena
                </p>
                <p className="font-mono text-xs text-dust-muted">
                  Tripulante nº 0182 · Galáxia da Infância
                </p>
              </div>
              <div className="flex w-full items-center justify-between border-t border-dust/10 pt-4 font-mono text-[0.65rem] text-dust-muted">
                <span>30×42cm</span>
                <span className="text-star">★★★★★</span>
                <span>Edição única</span>
              </div>
            </div>
          </div>

          {/* selo flutuante */}
          <div className="absolute -bottom-5 -left-3 hidden rotate-[-6deg] rounded-2xl bg-comet px-4 py-2 font-display text-sm font-600 text-nebula shadow-lg sm:block">
            Pronto em poucos dias 🚀
          </div>
        </div>
      </div>
    </section>
  );
}
