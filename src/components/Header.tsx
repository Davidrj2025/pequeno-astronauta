import { linkWhatsapp, SITE } from "@/data/content";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
      <div className="flex items-center gap-2">
        <span className="text-2xl" aria-hidden="true">
          🚀
        </span>
        <span className="font-display text-lg font-600 tracking-tight text-dust">
          {SITE.nome}
        </span>
      </div>
      <a
        href={linkWhatsapp()}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden rounded-full border border-dust/25 px-5 py-2.5 font-display text-sm font-600 text-dust transition-colors hover:border-star/60 hover:text-star sm:inline-flex"
      >
        Já sou cliente
      </a>
    </header>
  );
}
