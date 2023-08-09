/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        write: "write-delete 1s linear infinite",
        typing: "typing 1s linear infinite",
      },
      keyframes: {
        "write-delete": {
          "0%, 100%": { width: 0 },
          "50%": { width: "100%" },
        },
        typing: {
          "0%": {
            width: 0,
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "0%, 100%": {
            "border-color": "transparent",
          },
          "50%": {
            "border-color": "inherit",
          },
        },
      },
    },
  },
  plugins: [],
};
