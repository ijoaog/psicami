// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontMontserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Camila Ferreira | Psicóloga Clínica",
  description: "Uma jornada de reencontro com você mesma.",
  keywords: ["psicóloga", "terapia", "psicologia", "ACT", "TCC", "Curitiba"],
  authors: [{ name: "Camila Ferreira" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // =========================
  // ADDED: JSON-LD schema Person
  // =========================
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Camila Ferreira",
    alternateName: "Psicami",
    jobTitle: "Psicóloga Clínica",
    description:
      "Psicóloga clínica com foco em ACT e TCC, atendimentos online.",
    url: "https://psicami.com.br",
    image:
      "https://www.psicami.com.br/camila-hero.jpeg",
    sameAs: [
      "https://www.instagram.com/psicami_",
      "https://www.psicami.com.br",
    ],
    affiliation: {
      "@type": "Organization",
      name: "CRP - Conselho Regional de Psicologia",
    },
    identifier: {
      "@type": "PropertyValue",
      propertyID: "CRP",
      value: "CRP-08/44058",
      },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      addressCountry: "BR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Atendimento psicológico",
      telephone: "+55-41-98519-9520",
      email: "psicami.fer@gmail.com",
    },
  };

  return (
    <html
      lang="pt-BR"
      className={`${fontMontserrat.variable} scroll-smooth dark`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Analytics (mantido) */}
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
        {/* =========================
            ADDED: Script JSON-LD Person
            ========================= */}
        <Script
          id="schema-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* (Opcional) Você pode adicionar Open Graph/Twitter aqui depois */}
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontMontserrat.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}