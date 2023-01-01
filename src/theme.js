import { createTheme } from "@mui/material";
export const colors = {
  black: {
    100: "#cccccc",
    200: "#999999",
    300: "#666666",
    400: "#333333",
    500: "#000000",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000",
  },
};
export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily:['Nunito', "sans-serif"].join(','),
      fontSize: "14px",
      textTransform: "none",
      color:'white'
    },
    h1: {
      fontFamily: "sans-serif",
      fontSize: 40,
    },
    h2: {
      fontFamily: "sans-serif",
      fontSize: 32,
    },
    h3: {
      fontFamily: "sans-serif",
      fontSize: 24,
    },
    h4: {
      fontFamily: "sans-serif",
      fontSize: 20,
    },
    h5: {
      fontFamily: "sans-serif",
      fontSize: 16,
    },
    h6: {
      fontFamily: "sans-serif",
      fontSize: 14,
    },
  },
  palette: {
    primary: {
      main: colors.black[500],
    },
    secondary:{
      main:'#fff'
    }
  },
});
