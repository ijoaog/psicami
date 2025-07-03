import type React from "react"
import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const fontSora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
})

export const metadata: Metadata = {
  title: "Camila Ferreira | Psicóloga Clínica",
  description: "Uma jornada de reencontro com você mesma. Terapia com foco em acolhimento, respeito e resultados.",
  keywords: "psicóloga, terapia, psicologia clínica, ACT, TCC, Curitiba",
  authors: [{ name: "Camila Ferreira" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-inter antialiased", fontInter.variable, fontSora.variable)}>
        {children}
      </body>
    </html>
  )
}
