/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Placeholder palette – the official SIP Abacus site could not be inspected,
        // so these are NOT confirmed brand colours. Swap once brand assets are supplied.
        ink: '#1e1b4b',
        brand: { 50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa', 400: '#fb923c', 500: '#f97316', 600: '#c2410c', 700: '#9a3412' },
        sky: { soft: '#eef2ff' },
        leaf: { 100: '#d1fae5', 600: '#047857' },
      },
      fontFamily: {
        display: ['ui-rounded', '"SF Pro Rounded"', '"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      boxShadow: { card: '0 10px 30px -12px rgba(30,27,75,.22)' },
      keyframes: {
        bead: { '0%,100%': { transform: 'translateX(0)' }, '50%': { transform: 'translateX(var(--slide,14px))' } },
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
      },
      animation: { bead: 'bead 4.5s ease-in-out infinite', floaty: 'floaty 6s ease-in-out infinite' },
    },
  },
  plugins: [],
}
