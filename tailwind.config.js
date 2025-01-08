/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sixtyfour: ["Sixtyfour", "sans-serif"], // Custom font family
        quicksand: ["Quicksand", "sans-serif"], // Quicksand font
        protest: ["Protest Strike", "sans-serif"], // Protest Strike font
      },
    },
  },
  plugins: [],
};
