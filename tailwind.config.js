/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100': { opacity: 1 },
          '0': { opacity:  0},
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeOut: 'fadeOut 1s ease-in-out'
      },
      colors: {
        "darkprimary": "#282424",
        "darksecondary": "#2B2828",
        "redprimary": "#BA0810",
        "blueprimary": "#32509F",
        "lightsecondary": "F3F1F1",
      },
      fontFamily: {
        "abhaya-libre": ["Abhaya Libre"],
        "abril-fatface": ["Abril Fatface"]
      },
      backgroundImage: {
        'hero-light': "url('/herolightbg.svg')",
        'hero-dark': "url('/herodarkbg.svg')",
        "barber": "url('/lady.png')",
        "barberchair": "url('/barberchair.png')",
        "features-light": "url('/featureslightbg.svg')",
        "features-dark": "url('/featuresdarkbg.svg')",
        "hand" : "url('/hand.png')",
        "faqbg" : "url('/barbertools.png')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
