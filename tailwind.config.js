/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        alloro: {
          50: "#FDF8F6",
          100: "#FBECE8",
          200: "#F3D1C8",
          500: "#D66E53",
          600: "#C1583E",
          800: "#8A3C28",
          900: "#1E293B",
        },
      },
      boxShadow: {
        glow: "0 0 15px rgba(214, 110, 83, 0.2)",
      },
    },
  },
  plugins: [],
};
