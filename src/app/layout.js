import "@/styles/globals.css";
import React from "react";

export const metadata = {
  title: "Enzo LE MOAL - DÉVELOPPEUR WEB FULLSTACK",
  description: "Enzo LE MOAL, développeur web fullstack",
  authors: [{ name: "Enzo Le Moal" }],
  metadataBase: new URL("https://enzo-lemoal.netlify.app"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "développeur full stack",
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
    title: "Enzo Le Moal | Développeur Full Stack",
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
  return (
    <html lang="fr">
      <head />
      <body>{children}</body>
    </html>
  );
}