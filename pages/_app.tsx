import React from 'react';
import '../styles/globals.css';
import 'public/fonts/fonts.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../components/layout/layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Dominik Sęk - Portfolio</title>
      <meta
        name="description"
        content="Dominik Sęk is a Frontend Developer based in Poland. He is passionate about creating beautiful and functional websites."
      />
      <meta name="author" content="Dominik Sęk" />
      <meta
        name="keywords"
        content="Dominik Sęk, Portfolio, Frontend, Developer, React, Next.js, TailwindCSS, TypeScript"
      />
      <link rel="icon" sizes="192x192" href="/android-chrome-192x192.png" />
      <link rel="icon" sizes="512x512" href="/android-chrome-512x512.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="icon" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" sizes="32x32" href="/favicon-32x32.png" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
