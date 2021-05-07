import light from "./light";

const theme = {
  fonts: {
    light: "Poppins_300Light",
    regular: "Poppins_400Regular",
    medium: "Poppins_500Medium",
    semi_bold: "Poppins_600SemiBold",
    bold: "Poppins_700Bold",
  },
  borderRadius: 100,
};

export const lightTheme = {
  ...light,
  ...theme,
};
