/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        brand: { 
          red: "#E63329", 
          dark: "#0A0A0A",
          gray: "#6B7280",
          light: "#F5F5F5",
        }
      },
      fontFamily: {
        sans: ["Inter", "Helvetica Neue", "Arial", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
      },
      container: { center: true, padding: "1.5rem" },
    },
  },
  plugins: [],
}

