/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  swcMinify: false,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
