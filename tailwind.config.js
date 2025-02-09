import { heroui } from "@heroui/theme";

const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', 
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {};
      const animationDelays = theme("animationDelay");

      Object.keys(animationDelays).forEach((key) => {
        newUtilities[`.animate-delay-${key}`] = {
          animationDelay: animationDelays[key],
        };
      });

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
    heroui({
      defaultTheme: "dark", // default theme from the themes object
      themes: {},
    }),
  ],
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        valorax: ["valorax"],
        astroid: ["astroid"],
        fixedsys: ["fixedsys"],
      },
      backgroundImage: {
        defaultCyberPunk:
          "url('../public/resources/pictures/portfolioBackground.jpg')",
        neonTriangles: "url('../public/resources/pictures/neonTriangles.jpg')",
        neonRain: "url('../public/resources/pictures/neonRain.jpg')",
        hello: "url('../public/resources/pictures/hello.jpg')",
        lookingForSign: "url('../public/resources/pictures/lookingForSign.jpg')",
        open: "url('../public/resources/pictures/open.PNG')",
        forHire: "url('../public/resources/pictures/forHire.jpg')",
        preciousTime: "url('../public/resources/pictures/preciousTime.jpg')",
        enjoyToday: "url('../public/resources/pictures/enjoyToday.JPG')",
        neonPurple: "url('../public/resources/pictures/neonPurple.jpg')",
      },
      transitionProperty: {
        "max-height": "max-height",
        "max-width": "max-width",
        height: "height",
      },
      transitionDuration: {
        "0.25s": "0.25s",
        "0.5s": "0.5s",
        "0.75s": "0.75s",
        "1s": "1s",
        "4s": "4s",
        "15s": "15s",
        "20s": "20s",
      },
      animationDelay: {
        "0s": "0s",
        "1s": "1s",
        "2s": "2s",
        "2half": "2.5s",
        "3s": "3s",
        "4s": "4s",
        "5s": "5s",
      },
      animation: {
        fadeIn: "fadeIn 1s forwards ease-in",
        transitionToRight: "transitionToRight 1s forwards",
        transitionFromTop: "transitionFromTop 1s forwards fadein ease-in-out",
        transitionFromBottom: "transitionFromBottom 0.5s forwards",
        fadeOut: "fadeOut 1s forwards ease-in-out",
        typewriter:
          "typewriter 1s steps(40, end) 1s 1 normal both, blinkCursor 0.75s step-end infinite",
        typewriterSlow: "typewriter 2s steps(19, end) 1s 1 normal both, blinkCursor 0.75s step-end infinite",
        blinkCursor: "blinkCursor 0.75s step-end infinite",
        "appearance-in-bounce" :  'appearance-in 1s ease-out 4s, appearance-bounce 1s ease-in-out 5s infinite normal',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        transitionToRight: {
          "0%": { transform: "translateX(-20%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        transitionFromTopOp: {
          "0%": { transform: "translateY(-120%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        transitionFromTop: {
          "0%": { transform: "translateY(-120%)" },
          "100%": { transform: "translateY(0)" },
        },
        transitionFromBottom: {
          "0%": { transform: "translateY(40%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        typewriter: {
          "0%": { width: "0", visibility: "hidden" },
          "0.1%": { visibility: "visible" },
          "100%": { width: "100%" },
        },
        blinkCursor: {
          "from, to": { borderRightColor: "transparent" },
          "50%": { borderRightColor: "white" },
        },
        'appearance-in': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'appearance-bounce': {
          '0%, 100%': { opacity: '1', transform: 'translateY(0)' },
          '50%': { opacity: '1', transform: 'translateY(-10px)' },
        },
      },
    },
  },
  darkMode: "class",
};
