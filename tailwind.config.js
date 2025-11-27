// tailwind.config.js (à placer à la racine de mon-site-culturel/)

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Cette ligne est cruciale : elle dit à Tailwind de scanner tout dans le dossier 'src'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
    },
  },

  plugins: [],
}