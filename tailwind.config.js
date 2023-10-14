/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        '120': '50rem', // You can adjust the value as needed
      },
      width: {
        '120': '30rem', // You can adjust the value as needed
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xs':'320px',
        'sm': '500px',
        'md': '768px',
        'lg': '850px',
        'xl': '1280px',
        '2xl': '1536px',
      },
            colors: {
        cyan: '#A1FFF7',
        heather: '#B8AEDA',
        Kgreen:'#8cc43c',
        Kgray:'#808080',
        offwhite:'#FAF9F6'
      },
    },
  },
  plugins: [],
}
