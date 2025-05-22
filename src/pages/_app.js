import "@/styles/globals.css";
import React from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Enzo LE MOAL, développeur web fullstack actuellement en recherche d'alternance,
          pour une durée de 14 mois,
          avec un rythme 3 semaines en entreprise, et 1 semaine en formation" />
        <meta property="og:description" content="Enzo LE MOAL, développeur web fullstack actuellement en recherche d'alternance,
          pour une durée de 14 mois,
          avec un rythme 3 semaines en entreprise, et 1 semaine en formation" />
        <meta property="og:image" content="../../public/wide.svg" />
        <link rel="icon" type="image/svg+xml" href="/wide.svg" />
        <meta property="og:site_name" content="Enzo LE MOAL - DÉVELOPPEUR WEB FULLSTACK" />
        <title>Enzo LE MOAL - DÉVELOPPEUR WEB FULLSTACK</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
