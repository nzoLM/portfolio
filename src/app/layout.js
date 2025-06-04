import "@/styles/globals.css";
import React from "react";

export const metadata = {
  title: "Enzo LE MOAL - DÉVELOPPEUR WEB FULLSTACK",
  description: "Enzo LE MOAL, développeur web fullstack actuellement en recherche d'alternance, pour une durée de 14 mois, avec un rythme 3 semaines en entreprise, et 1 semaine en formation",
  openGraph: {
    description: "Enzo LE MOAL, développeur web fullstack actuellement en recherche d'alternance, pour une durée de 14 mois, avec un rythme 3 semaines en entreprise, et 1 semaine en formation",
    images: ["/wide.svg"],
    siteName: "Enzo LE MOAL - DÉVELOPPEUR WEB FULLSTACK",
  },
  icons: {
    icon: "/wide.svg",
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