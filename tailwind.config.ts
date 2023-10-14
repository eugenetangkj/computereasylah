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
        "dark-gray": "#595959",
        pink: "#FE357D",
      },
      fontFamily: {
        sans: ['"PT Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
