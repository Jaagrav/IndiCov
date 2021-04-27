import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = {
  palette: {
    primary: {
      main: "#E7EFFF",
      gradient1: "#61FFB3",
      gradient2: "#7C99FF",
      mainGradient: "linear-gradient(to left, #61FFB3 0%, #7C99FF 70%)",
    },
    highlight: {
      blue: "#3B7BF6",
      green: "#34BE42",
      yellow: "#C9CC1F",
      red: "#CC1F5E",
    },
    text: {
      primary: "#E7EFFF",
      secondary: "#556D9B",
      disabled: "#616672",
    },
    background: {
      main: "#00101F",
      secondary: "#051C31",
      containerColor: "#091A2C",
      gradient: "linear-gradient(180deg, #001A32 0%, #000C16 100%)"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: ['"Poppins"', 'Sans-Serif'].join(',')
  },
  breakpoints: {
    values:{
      xs: 0, 
      sm: 600, 
      md: 960, 
      lg: 1280, 
      xl: 1440
    }
  }
};

export { theme, createMuiTheme, ThemeProvider };
