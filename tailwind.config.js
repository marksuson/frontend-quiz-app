/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background:
          "url('./assets/images/pattern-background-desktop-light.svg')",
      },
      colors: {
        "bright-purple": "#A729F5",
        "dark-navy": "#313E51",
        "light-navy": "#3B4D66",
        "gray-navy": "#626C7F",
        "correct-green": "#26D782",
        "incorrect-red": "#EE5454",
        "light-gray": "#F4F6FA",
        white: "#FFFFFF",
        "icon-orange": "#FFF1E9",
        "icon-blue": "#EBF0FF",
        "icon-green": "#E0FDEF",
        "icon-purple": "#F6E7FF",
        "icon-fill-orange": "#FF7E35",
        // Add other colors from the design system as needed
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      fontSize: {
        base: "12px",
        lg: "14px",
        xl: "16px",
        "2xl": "20px",
        "4xl": "64px",
      },
      lineHeight: {
        "extra-loose": "150%",
      },
      borderRadius: {
        lg: "12px",
      },
      boxShadow: {
        "3xl": "0 16px 40px 0 rgba(0, 0, 0, 0.25)",
      },
      dropShadow: {
        "3xl": "0 16px 40px rgba(0, 0, 0, 0.25)",
      },
      // Add other design system specifications as needed
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-icon-(orange|blue|purple|green)/,
    },
    "bg-icon-orange",
    "bg-icon-blue",
    "bg-icon-purple",
    "bg-icon-green",
  ],
};
