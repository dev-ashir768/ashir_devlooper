/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        mainBackground:
          "radial-gradient(circle at 84% 82%, rgba(217, 217, 217, 0.03) 0%, rgba(217, 217, 217, 0.03) 21%, transparent 21%, transparent 100%), radial-gradient(circle at 75% 56%, rgba(3, 3, 3, 0.03) 0%, rgba(3, 3, 3, 0.03) 30%, transparent 30%, transparent 100%), radial-gradient(circle at 74% 53%, rgba(153, 153, 153, 0.03) 0%, rgba(153, 153, 153, 0.03) 95%, transparent 95%, transparent 100%), radial-gradient(circle at 86% 43%, rgba(209, 209, 209, 0.03) 0%, rgba(209, 209, 209, 0.03) 83%, transparent 83%, transparent 100%), radial-gradient(circle at 64% 88%, rgba(192, 192, 192, 0.03) 0%, rgba(192, 192, 192, 0.03) 2%, transparent 2%, transparent 100%), radial-gradient(circle at 73% 77%, rgba(205, 205, 205, 0.03) 0%, rgba(205, 205, 205, 0.03) 18%, transparent 18%, transparent 100%), radial-gradient(circle at 57% 51%, rgba(161, 161, 161, 0.03) 0%, rgba(161, 161, 161, 0.03) 64%, transparent 64%, transparent 100%), radial-gradient(circle at 40% 84%, rgba(115, 115, 115, 0.03) 0%, rgba(115, 115, 115, 0.03) 14%, transparent 14%, transparent 100%), linear-gradient(90deg, rgb(0, 0, 0), rgb(0, 0, 0))",
      },
    },
  },
  plugins: [],
};
