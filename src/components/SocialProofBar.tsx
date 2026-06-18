import Counter from "./Counter";
import Reveal from "./Reveal";

const stats = [
  { valor: 18420, sufixo: "+", label: "missões criadas" },
  { valor: 4, sufixo: "", label: "dias úteis de produção", isStatic: true, display: "2–4" },
  { valor: 98, sufixo: "%", label: "famílias satisfeitas" },
  { valor: 27, sufixo: "", label: "estados atendidos" },
];

export default function SocialProofBar() {
  return (
    <section className="border-y border-dust/10 bg-nebula-light/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-10 sm:px-8 lg:grid-cols-4 lg:px-12">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delayMs={i * 80}>
            <div className="text-center">
              <p className="font-display text-3xl font-700 text-star sm:text-4xl">
                {stat.isStatic ? (
                  stat.display
                ) : (
                  <>
                    <Counter target={stat.valor} />
                    {stat.sufixo}
                  </>
                )}
              </p>
              <p className="mt-1 text-xs text-dust-muted sm:text-sm">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
