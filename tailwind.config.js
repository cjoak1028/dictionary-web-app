/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'primary': '#a445ed',
        'primary-variant': '#8f19e8',
        'surface':'#ffffff',
        'surface-dark': '#050505',
        'surface-container': '#f4f4f4',
        'surface-container-dark': '#1f1f1f',
        'on-surface': '#2d2d2d',
        'on-surface-dark': '#ffffff',
        'on-surface-variant': '#757575',
        'error': '#ff5252',
        'outline': '#e9e9e9',
        'outline-dark': '#3a3a3a',
      },
    },
  },
  plugins: [],
}

