import React from 'react';
import '../styles/globals.css';
import 'public/fonts/fonts.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/layout/layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
