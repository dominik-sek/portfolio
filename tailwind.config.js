/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        darkBlue: '#33397d',
        yellow: '#ffca28',
        lightBlue: '#a7abd1',
      },
      gridTemplateRows: {
        8: 'repeat(8, minmax(0, 1fr))',
      },
      blur: {
        '4xl': '72px',
        '5xl': '86px',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s linear infinite',
      },
    },
  },

  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
