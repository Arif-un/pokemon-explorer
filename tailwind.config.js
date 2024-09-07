/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
      sans: ['Suse', 'sans-serif']
    },
    extend: {
      transitionProperty: {
        offset: 'outline-offset'
      },
      screens: {
        lg: { max: '1023px' },
        md: { max: '767px' },
        sm: { max: '639px' }
      }
    }
  },
  plugins: []
}
