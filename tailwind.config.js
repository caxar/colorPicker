/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_color: "#100f0f",
        white_color: "#feffff",
        black_color: "#0f0f0f",
        gradient_one: "#038183",
        gradient_two: "#0c4f50",
        block_color: "#23282f",
        upload_color: "#999999",
      },
    },
  },
  plugins: [],
};
