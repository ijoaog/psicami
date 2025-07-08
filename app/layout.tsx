import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontInter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fontSora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "Camila Ferreira | Psicóloga Clínica",
  description: "Uma jornada de reencontro com você mesma.",
  keywords: "psicóloga, terapia, psicologia, ACT, TCC, Curitiba",
  authors: [{ name: "Camila Ferreira" }],
  // viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-MTS1F94WH8"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MTS1F94WH8', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-inter antialiased",
          fontInter.variable,
          fontSora.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
