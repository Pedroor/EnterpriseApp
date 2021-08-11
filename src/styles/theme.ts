export default {
  colors: {
    background: "#f0f2f5",
    shape: "#FFFFFF",
    inputBackground: "#e7e9ee",
    red: "#F0141E",
    skeleton: "#969590",
    blue: "#1851ad",
  },

  fontFamily: {
    regular: "Montserrat_400Regular",
    light: "Montserrat_300Light",
    bold: " Montserrat_700Bold",
    extraBold: "Montserrat_800ExtraBold",
  },

  textVariants: {
    bigTitle: {
      fontSize: "28px",
      fontFamily: "Montserrat-Bold",
      lineHeight: "2px",
    },
    title: {
      fontSize: "26px",
      fontFamily: "Montserrat-Bold",
      lineHeight: "22px",
    },

    body: {
      fontSize: "16px",
      fontFamily: "Montserrat-SemiBold",
      lineHeight: "20px",
    },
  },
} as const;
