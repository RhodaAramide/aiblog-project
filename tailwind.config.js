/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "Inter, sans-serif",
      kumbh: "Kumbh Sans, sans-serif",
    },
    extend: {
      colors: {
        primary: "#FFD11A",
        secondary: "#1A1A1A",
        background: "#141414",
        text: "white",
        accent: {
          DEFAULT: "#7E7E81",
          hover: "#1E1E1E",
        },
      },
    },
  },
  plugins: [],
};
