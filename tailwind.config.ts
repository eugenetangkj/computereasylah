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
<<<<<<< HEAD
        nunito: ["Nunito", "sans-serif"],
        gaegu: ["Gaegu", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        consolas: ["Consolas", "sans-serif"],
      },
      colors: {
        "compassion-pink": {
          100: "#FFBED5",
          500: "#FF89B3",
          900: "#FE357D",
=======
        nunito: ['Nunito', 'sans-serif'],
        gaegu: ['Gaegu', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        consolas: ['Consolas', 'sans-serif'],
      },
      colors: {
        'compassion-pink': {
          100: '#FFBED5',
          500: '#FF89B3',
          900: '#FE357D',
        },

        'energy-orange': {
          500: '#F8DC69',
          900: '#FDBF5E',
          'hover': '#EAA12F'
>>>>>>> ef25589c0a90ac19f39a63d8c4b1b8492dfb7c03
        },

        "energy-orange": {
          500: "#F8DC69",
          900: "#FDBF5E",
          hover: "#EAA12F",
        },

        "trust-blue": {
          500: "#C0DEFA",
          900: "#5EB1FD",
          hover: "#2D8EE9",
        },

<<<<<<< HEAD
        "passion-red": {
          500: "FAC0C0",
          900: "#FD5E68",
          hover: "#DB3943",
=======
        'wisdom-purple': {
          500: '#DDDAFF',
          900: '#8378FF',
          'hover': '#6A5DF6'
        },

        'pale-gray': {
          100: '#D4D4D4'
>>>>>>> ef25589c0a90ac19f39a63d8c4b1b8492dfb7c03
        },

        "wisdom-purple": {
          500: "#DDDAFF",
          900: "#8378FF",
          hover: "#6A5DF6",
        },

<<<<<<< HEAD
        "pale-gray": {
          100: "#D4D4D4",
        },
=======

>>>>>>> ef25589c0a90ac19f39a63d8c4b1b8492dfb7c03

        question: {
          correct: "#A2DA87",
        },
      },
      translate: {
        "1/8": "12.5%",
        "3/10": "30%",
        "2/5": "40%",
      },
      width: {
<<<<<<< HEAD
        "1/8": "12.5%",
        "1/16": "6.25%",
        "500p": "500px",
        "600p": "600px",
        "800p": "800px",
        "80vw": "80vw",
      },
      height: {
        "80vh": "80vh",
=======
        '1/8': '12.5%',
        '1/16': '6.25%',
        '500p': '500px',
        '600p': '600px',
        '800p': '800px',
        '80vw': '80vw'
      },
      height: {
        '80vh': '80vh',
>>>>>>> ef25589c0a90ac19f39a63d8c4b1b8492dfb7c03
      },
      top: {
        "1/8": "12.5%",
      },
    },
  },
  plugins: [],
};
export default config;
