/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        primary: "#d10000",
        "primary-variant": "#a30000",
        "on-primary": "#ffffff",
        "on-secondary": "#000000",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("flowbite/plugin"),
    require("tailwind-scrollbar"),
  ],
};
