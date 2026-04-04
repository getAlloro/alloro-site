/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        serif: ['"Source Serif 4"', "Georgia", "serif"],
        heading: ['"Source Serif 4"', "Georgia", "serif"],
      },
      colors: {
        alloro: {
          50: "#FDF8F6",
          100: "#FBECE8",
          200: "#F3D1C8",
          500: "#D66853",
          600: "#C1583E",
          800: "#8A3C28",
          900: "#1E293B",
        },
        cobalt: {
          DEFAULT: "#1E3A8A",
          50: "#EFF6FF",
          100: "#DBEAFE",
          500: "#3B82F6",
          600: "#1E3A8A",
          700: "#1e40af",
        },
        success: {
          500: "#10B981",
          50: "#ECFDF5",
        },
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        glow: "0 0 15px rgba(214, 104, 83, 0.2)",
        card: "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)",
        "card-hover": "0 2px 6px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.10)",
        warm: "0 4px 20px -2px rgba(214, 104, 83, 0.10)",
        "warm-lg": "0 8px 40px -4px rgba(214, 104, 83, 0.14)",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
