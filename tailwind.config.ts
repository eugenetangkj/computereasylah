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
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
        gaegu: ['Gaegu', 'sans-serif']
      },
      colors: {
        'compassion-pink': {
          100: '#FFBED5',
          500: '#FF89B3',
          900: '#FE357D',
        },
      
        'energy-orange': {
          500: '#F8DC69',
          900: '#FDBF5E'
        },

        'trust-blue': {
          500: '#C0DEFA',
          900: '#5EB1FD'
        },

        'passion-red': {
          500: 'FAC0C0',
          900: '#FD5E68'
        },

        'pale-gray': {
          100: '#D4D4D4'
        }

       

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
