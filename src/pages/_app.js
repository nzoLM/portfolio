import "@/styles/globals.css";
import React from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/wide.svg" />
        <title>Enzo LE MOAL</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
