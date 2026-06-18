import type { Metadata } from "next";
import { Fredoka, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pequeno Astronauta | Quadro Personalizado para Crianças",
  description:
    "Transforme a foto do seu filho em uma ilustração de astronauta personalizada, com nome e tema espacial. Receba em casa em poucos dias.",
  openGraph: {
    title: "Pequeno Astronauta | Quadro Personalizado para Crianças",
    description:
      "Transforme a foto do seu filho em uma ilustração de astronauta personalizada, com nome e tema espacial.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${fredoka.variable} ${inter.variable} ${jbmono.variable} font-body bg-nebula text-dust antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
