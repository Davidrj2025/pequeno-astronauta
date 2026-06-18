import { SITE } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-dust/10 bg-nebula-deep py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center sm:px-8 lg:px-12">
        <div className="flex items-center gap-2">
          <span className="text-xl" aria-hidden="true">
            🚀
          </span>
          <span className="font-display text-base font-600 text-dust">
            {SITE.nome}
          </span>
        </div>
        <p className="max-w-md text-xs text-dust-muted">
          Ilustrações personalizadas feitas no Brasil, com carinho, para
          transformar a infância em uma boa lembrança.
        </p>
        <p className="font-mono text-[0.7rem] text-dust-muted/70">
          © {new Date().getFullYear()} {SITE.nome}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
