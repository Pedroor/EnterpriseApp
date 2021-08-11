export default {
  colors: {
    highBlack: "#1a1918",
    lowBlack: "#353D40",
    lightGray: "#D9D9D9",
    highGray: "#A1A5A6",
    yellow: "#F2B138",
    background: "#f0f2f5",
    shape: "#FFFFFF",
    inputBackground: "#e7e9ee",
    red: "#F0141E",
    skeleton: "#969590",
    blue: "#003F63",
  },

  fontFamily: {
    regular: "Montserrat_Regular",
    semiBold: "Montserrat-SemiBold",
    bold: "Montserrat-Bold",
  },

  textVariants: {
    bigTitle: {
      fontSize: "20px",
      fontFamily: "Montserrat-Bold",
    },
    title: {
      fontSize: "16px",
      fontFamily: "Montserrat-Bold",
      lineHeight: "22px",
    },

    body: {
      fontSize: "12px",
      fontFamily: "Montserrat-SemiBold",
      lineHeight: "20px",
    },
  },
} as const;
