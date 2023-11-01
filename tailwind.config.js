/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-to-br": "linear-gradient(270deg,#f48fb1,#f48fb1)",
      }),
      fontFamily: {
        CeraBlack: ["Exo-Black", "sans-serif"],
      },
      colors: {
        primary: "#0A0E12",
        secondary: "#007aff",
        greyWhite: "#dfe1e6",
        foggyGrey: "#b4bac4",
        foggyGreyLowOpacity: "#7c8698",
        greyBlack: "#1f2934",
        greyBlackOpacity: "#44526c",
        textBlue: "#476cff",
        lightSilverGray: "#f4f5f7",
        lightGhostGray: "#f8f9ff",
        staleBlueGray: "#606c82",
        midNightBlue: "#10161d",
      },
      boxShadow: {
        main: "0px 2px 4px rgba(0, 0, 0, 0.15), 0px -2px 4px rgba(0, 0, 0, 0.15);",
        secondary: ["0px 3px 15px rgba(0, 0, 0, 0.1)"],
        right: ["0px 3px 15px rgba(0, 0, 0, 0.1)"],
        inner:
          " inset 0px 1px 2px rgba(97, 97, 97, 0.2), inset 0px 2px 4px rgba(97, 97, 97, 0.2)",
        thin: "0px 1px 4px rgba(0, 0, 0, 0.05), 0px 0px 4px rgba(0, 0, 0, 0.01);",
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".1em",
        widest: ".25em",
      },
    },
  },
  plugins: [],
};
