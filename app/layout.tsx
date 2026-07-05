import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Merca Puntual — Agencia Digital & Software House",
  description:
    "15+ años construyendo marcas digitales. Hoy construimos el software que las mueve. Marketing digital, desarrollo de software con IA, social media y branding.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="grid-bg" />
        {children}
      </body>
    </html>
  );
}
