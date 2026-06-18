import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Sistema "Mapa Estelar"
        nebula: {
          DEFAULT: "#0B1026", // azul-marinho quase preto (fundo principal)
          deep: "#070A1A",
          light: "#141B3D",
        },
        cosmos: {
          DEFAULT: "#3D2C8D", // roxo nebulosa
          light: "#5A45B8",
          soft: "#6F5FD1",
        },
        star: {
          DEFAULT: "#F2B544", // dourado-estrela (acento principal)
          light: "#FBD27E",
        },
        dust: {
          DEFAULT: "#F7F5F2", // branco poeira estelar
          muted: "#C9C6DA",
        },
        comet: {
          DEFAULT: "#FF6B5B", // coral (CTA secundário / urgência)
          light: "#FF8C7F",
        },
      },
      fontFamily: {
        display: ["var(--font-fredoka)", "ui-rounded", "sans-serif"],
        body: ["var(--font-inter)", "ui-sans-serif", "sans-serif"],
        mono: ["var(--font-jbmono)", "ui-monospace", "monospace"],
      },
      fontWeight: {
        "500": "500",
        "600": "600",
        "700": "700",
      },
      backgroundImage: {
        "star-field":
          "radial-gradient(1px 1px at 10% 20%, rgba(247,245,242,0.9) 0, transparent 40%), radial-gradient(1px 1px at 80% 10%, rgba(247,245,242,0.7) 0, transparent 40%), radial-gradient(1.5px 1.5px at 40% 70%, rgba(247,245,242,0.8) 0, transparent 40%), radial-gradient(1px 1px at 60% 40%, rgba(247,245,242,0.6) 0, transparent 40%), radial-gradient(1px 1px at 90% 80%, rgba(247,245,242,0.7) 0, transparent 40%), radial-gradient(1.5px 1.5px at 25% 90%, rgba(247,245,242,0.6) 0, transparent 40%)",
        "nebula-glow":
          "radial-gradient(circle at 50% 0%, rgba(61,44,141,0.45) 0%, rgba(11,16,38,0) 60%)",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "orbit-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "count-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.04)" },
        },
      },
      animation: {
        twinkle: "twinkle 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "orbit-spin": "orbit-spin 18s linear infinite",
        marquee: "marquee 38s linear infinite",
        "count-pulse": "count-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
