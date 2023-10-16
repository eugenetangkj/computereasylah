import type { Config } from "tailwindcss";

const config: Config = {
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
        "teaching-image": "url('../assets/teaching_image.png')",
      },
      colors: {
        "dark-blue": "#12497C",
        "accent-blue": "#4794DC",
        "light-blue": "#98C7F2",
        "normal-text": "#595959",
        "accent-pink": "#FE357D",
        "pale-pink": "#FF89B3",
        "light-pink": "#FFBED5",
      },
      fontFamily: {
        sans: ['"PT Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
