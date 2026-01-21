/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "water-light": "#c1e9ff",
        "water-deep": "#1b2a4a"
      },
      borderRadius: {
        "3xl": "1.75rem"
      },
      boxShadow: {
        glass: "0 18px 45px rgba(15, 23, 42, 0.45)"
      }
    }
  },
  plugins: []
};

