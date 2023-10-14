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
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        itim: ['Itim', 'cursive'],
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        'compassion-pink': {
          100: '#FFBED5',
          500: '#FF89B3',
          900: '#FE357D',
        },
        'trust-blue': {
          100: '#98C7F2',
          500: '#4794DC',
          900: '#12497C'
        },
      },
      translate: {
        '1/8': '12.5%'
      },
      width: {
        '1/8': '12.5%',
        '1/16': '6.25%',
      },
    },
  },
  plugins: [],
};
export default config;
