import "@/styles/globals.css";
import React from "react";

export const metadata = {
  title: "Enzo LE MOAL - DÉVELOPPEUR WEB FULLSTACK",
  description: "Enzo LE MOAL, développeur web fullstack, Paris,France",
  authors: [{ name: "Enzo Le Moal" }, { name: "Enzo LE MOAL" }],
  creator: "Enzo LE MOAL",
  metadataBase: new URL("https://enzo-lemoal.netlify.app"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: 'zJ7ldQ-S4-4xgWd_IZ5BUUEH_VMHr5Sn5XyVIsEST6U',
  },
  keywords: [
    "développeur full stack",
    "Enzo LE MOAL",
    "Enzo Le Moal",
    "enzo le moal",
    "portfolio développeur web",
    "alternance développeur",
    "Next.js",
    "React",
    "Node.js",
    "Paris"
  ],
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Enzo Le Moal | Développeur web Full Stack",
    description: "Portfolio de Enzo Le Moal, développeur web full stack.",
    images: ["/dragonball.svg"]
  },
  openGraph: {
    title: "Enzo Le Moal | Développeur Full Stack",
    description: "Portfolio de Enzo Le Moal, développeur web full stack.",
    url: "https://enzo-lemoal.netlify.app",
    siteName: "Portfolio Enzo Le Moal",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/dragonball.svg",
        width: 1200,
        height: 630,
        alt: "Portfolio Enzo Le Moal",
      },
    ],
  },
  icons: {
    icon: "/dragonball.svg",
  },
};

export default function RootLayout({ children }) {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Enzo Le Moal',
    url: 'https://enzo-lemoal.netlify.app',
    image: 'https://enzo-lemoal.netlify.app/files/photo-de-profil.jpg',
    jobTitle: 'Développeur Web Full Stack',
    description: 'Développeur web spécialisé en React, Next.js et Django.',
    sameAs: [
      'https://www.linkedin.com/in/enzo-le-moal',
      'https://github.com/nzoLM',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressCountry: 'FR',
    },
  }
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}