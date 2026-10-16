/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Accent principal — bleu personnel (sort du #2563eb par défaut)
        brand: {
          50: "#EEF2FF",
          100: "#DDE4FF",
          200: "#C0CBFF",
          300: "#9FADFF",
          400: "#7A8CFF",
          500: "#5A6CFF",
          600: "#3B5BFF",
          700: "#2F49E6",
          800: "#263CBF",
          900: "#233696",
          950: "#161F58",
        },
        // Texte principal
        ink: "#0B1120",
        // Surfaces
        mist: "#F8FAFC",
        // Accent chaud — CTA / badge « Disponible »
        accent: {
          50: "#FFF8EB",
          100: "#FEECC7",
          200: "#FDD68A",
          300: "#FCBB4D",
          400: "#FAA621",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
          950: "#451A03",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgb(15 23 42 / .18)",
        glow: "0 0 60px -15px rgb(59 91 255 / .35)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
