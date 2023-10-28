import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      screens: {
        'navbar-custom': '890px',    // Custom for navbar resizing
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "teaching-image": "url('../assets/teaching_image.png')",
      },
      fontFamily: {
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
        "passion-red": {
          500: "#FAC0C0",
          900: "#FD5E68",
          hover: "#DB3943",
        },
        "wisdom-purple": {
          500: "#DDDAFF",
          900: "#8378FF",
          hover: "#6A5DF6",
        },
        "creative-pink": {
          500: "#FFD7EA",
          900: "#EB70BA",
          hover: "#D84FA1",
        },

        "pale-gray": {
          100: "#D4D4D4",
          500: "#595959",
        },

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
        "1/8": "12.5%",
        "1/16": "6.25%",
        "500p": "500px",
        "600p": "600px",
        "800p": "800px",
        "80vw": "80vw",
        "340p": "340px",
        "450p": "450px",
        "540p": "540px",
      },
      height: {
        "80vh": "80vh",
        "100p": "100px",
        "50vh": "50vh"
      },
      top: {
        "1/8": "12.5%",
      },
    },
  },
  plugins: [],
};
export default config;
