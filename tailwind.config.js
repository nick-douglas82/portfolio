module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "Times New Roman"],
       },
    },
    container: {
      center: true,
      screens: {
        xl: '1140px',
      }
    }
  },
  plugins: [],
}