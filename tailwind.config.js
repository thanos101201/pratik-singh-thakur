/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slate': {
          900: '#0f172a',
          800: '#1e293b',
          400: '#94a3b8',
          50: '#f8fafc',
        },
        'blue': {
          500: '#3b82f6',
          600: '#2563eb',
        },
        'cyan': {
          500: '#06b6d4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
