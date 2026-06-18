import Reveal from "./Reveal";

const exemplos = [
  { nome: "Mariana", idade: "4 anos", emoji: "👧🚀", grad: "from-cosmos to-nebula-light" },
  { nome: "Theo", idade: "7 anos", emoji: "🧑‍🚀", grad: "from-comet to-cosmos" },
  { nome: "Helena", idade: "3 anos", emoji: "👶🚀", grad: "from-star to-comet" },
  { nome: "Gabriel", idade: "6 anos", emoji: "🧒🚀", grad: "from-cosmos-soft to-nebula-light" },
  { nome: "Alice", idade: "5 anos", emoji: "👧🪐", grad: "from-comet-light to-cosmos" },
  { nome: "Davi", idade: "8 anos", emoji: "🧑‍🚀", grad: "from-star-light to-cosmos-soft" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="relative bg-nebula py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Galeria de missões</span>
          <h2 className="mt-3 font-display text-3xl font-700 text-dust sm:text-4xl">
            Pequenos astronautas que já decolaram
          </h2>
          <p className="mt-4 text-dust-muted">
            Cada ilustração é única, feita à mão por nossa equipe a partir da
            foto enviada pela família.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6">
          {exemplos.map((item, i) => (
            <Reveal key={item.nome} delayMs={i * 70}>
              <div
                className={`badge-card group relative flex aspect-[3/4] flex-col items-center justify-center gap-3 bg-gradient-to-br ${item.grad} p-5 transition-transform duration-300 hover:-translate-y-1`}
              >
                <span className="text-5xl drop-shadow-sm sm:text-6xl">
                  {item.emoji}
                </span>
                <div className="text-center">
                  <p className="font-display text-base font-600 text-dust sm:text-lg">
                    {item.nome}
                  </p>
                  <p className="font-mono text-[0.65rem] text-dust/80">
                    {item.idade}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center" delayMs={120}>
          <p className="text-sm text-dust-muted">
            Quer ver a sua criança aqui também? É só enviar a foto pelo
            WhatsApp.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
