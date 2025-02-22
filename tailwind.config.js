/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F5F5',
        primary: '#007BFF',
        accent: '#17A2B8',
        text: '#333333',
        // Adding some variations for flexibility
        'primary-light': '#3395ff',
        'primary-dark': '#0056b3',
        'accent-light': '#1fc8e3',
        'accent-dark': '#117a8b',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 