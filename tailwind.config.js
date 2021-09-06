module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: "#252525",
        primary: "#1B1B1B",
        secondary: "#141414",
        tertiary: "#090909",
        success: "#51AA55",
        accent: "#4D24AD"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
