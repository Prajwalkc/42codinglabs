/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)', surface: 'var(--surface)', fg: 'var(--fg)', muted: 'var(--muted)', line: 'var(--line)',
        brand: { DEFAULT: '#754DEC', 700: '#5026B2' }, teal: '#2BD4C0', blue: '#3F7DF0',
      },
      fontFamily: { sans: ['var(--font-poppins)', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
