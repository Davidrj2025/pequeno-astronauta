import { linkWhatsapp } from "@/data/content";

export default function WhatsAppFloatButton() {
  return (
    <a
      href={linkWhatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3.5 shadow-[0_8px_24px_-4px_rgba(37,211,102,0.55)] transition-transform duration-300 hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6 text-[#08321B]"
        aria-hidden="true"
      >
        <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.83 14.06c-.25.7-1.45 1.34-2 1.43-.51.08-1.15.11-1.86-.12-.43-.13-.98-.32-1.69-.62-2.97-1.28-4.9-4.27-5.05-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.18.3.79 1.3 1.7 2.1 1.17 1.04 2.16 1.37 2.46 1.52.3.15.48.13.66-.05.18-.18.78-.86.99-1.16.2-.3.41-.25.67-.15.27.1 1.7.8 1.99.95.3.15.49.22.56.34.07.13.07.74-.18 1.44Z" />
      </svg>
      <span className="hidden font-display text-sm font-600 text-[#08321B] sm:inline">
        Falar no WhatsApp
      </span>
    </a>
  );
}
