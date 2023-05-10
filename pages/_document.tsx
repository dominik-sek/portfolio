import React from 'react';
import {
  Html, Head, Main, NextScript,
} from 'next/document';

const Document = () => (
  <Html lang="en">
    <title>Dominik Sęk - Portfolio</title>
    <Head>
      <meta
        name="description"
        content="Dominik Sęk is a Frontend Developer based in Poland. He is passionate about creating beautiful and functional websites."
      />
      <meta name="author" content="Dominik Sęk" />
      <meta
        name="keywords"
        content="Dominik Sęk, Portfolio, Frontend, Developer, React, Next.js, TailwindCSS, TypeScript"
      />
      <link href="/android-chrome-192x192.png" />
      <link href="/android-chrome-512x512.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link href="/favicon-16x16.png" />
      <link href="/favicon-32x32.png" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);
export default Document;
