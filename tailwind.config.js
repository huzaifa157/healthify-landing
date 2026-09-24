/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0F261A',
          forest: '#153623',
          deep: '#1B3F2A',
          primary: '#235338',
          accent: '#2E7D4E',
          emerald: '#38A169',
          light: '#EAF4EC',
          sage: '#F0F6F2',
          cream: '#FAFCFA',
          muted: '#5A6E62',
          border: '#DCE8DF',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0, 0, 0, 0.05)',
        'card': '0 12px 35px rgba(21, 54, 35, 0.08)',
        'elevated': '0 20px 40px rgba(15, 38, 26, 0.12)',
      }
    },
  },
  plugins: [],
}
