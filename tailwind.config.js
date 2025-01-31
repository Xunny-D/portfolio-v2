import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [heroui({
    defaultTheme: "dark", // default theme from the themes object
    themes:{

  }
    }
  )],
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
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
        "defaultCyberPunk": "url('../resources/pictures/portfolioBackground.jpg')",
        "neonTriangles": "url('../resources/pictures/neonTriangles.jpg')",
        "neonRain": "url('../resources/pictures/neonRain.jpg')",
        "hello": "url('../resources/pictures/hello.jpg')",
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
      animation: {
        fadeIn: "fadeIn 1s forwards ease-in",
        transitionToRight: "transitionToRight 1s forwards",
        transitionFromTop: "transitionFromTop 1s forwards fadein ease-in-out",
        transitionFromBottom: "transitionFromBottom 1s forwards",
        fadeOut: "fadeOut 1s forwards ease-in-out",
        typewriter: 'typewriter 4s steps(40, end) 1s 1 normal both, blinkCursor 0.75s step-end infinite',
        blinkCursor: 'blinkCursor 0.75s step-end infinite',

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
          "0%": { transform: "translateY(120%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1    },
          "100%": { opacity: 0 },
        },
        typewriter: {
          '0%': { width: '0', visibility: 'hidden' },
          '0.1%': { visibility: 'visible' },
          '100%': { width: '100%' },
        },
        blinkCursor: {
          'from, to': { borderRightColor: 'transparent' },
          '50%': { borderRightColor: 'white' },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}
