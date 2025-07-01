import type React from "react";
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fontSora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Camila Ferreira | Psicóloga Clínica",
  description:
    "Uma jornada de reencontro com você mesma. Terapia com foco em acolhimento, respeito e resultados.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-[#FBF9F7] font-inter antialiased",
          fontInter.variable,
          fontSora.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="px-4 lg:px-8 h-20 flex items-center justify-between sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/60">
            <Link href="#" className="flex items-center" prefetch={false}>
              <span className="text-2xl font-bold font-sora tracking-tight">
                Camila Ferreira
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              <Link
                href="#ajuda"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                prefetch={false}
              >
                Como Posso Ajudar
              </Link>
              <Link
                href="#sobre"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                prefetch={false}
              >
                Sobre Mim
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <Button
                asChild
                className="hidden lg:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 shadow-sm"
              >
                <Link href="#contato" prefetch={false}>
                  Agendar Consulta
                </Link>
              </Button>
              <ThemeToggle />
            </div>
          </header>
          {children}
          <footer className="bg-background border-t border-border/60">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-6 py-8 px-4 md:px-6">
              <div className="text-center md:text-left">
                <p className="font-bold font-sora">Camila Ferreira</p>
                <p className="text-sm text-muted-foreground">
                  Psicóloga Clínica | CRP 08/44058
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                &copy; 2025. Todos os direitos reservados.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://www.instagram.com/psicami_/"
                  
                  className="text-muted-foreground hover:text-primary transition-colors"
                  prefetch={false}
                  target="_blank"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
