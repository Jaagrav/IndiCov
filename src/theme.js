import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = {
  palette: {
    primary: {
      main: "#FFFFFF",
      blurColor: "rgba(84, 152, 255, 0.56)",
      gradient1: "#61FFB3",
      gradient2: "#7C99FF",
      mainGradient: "linear-gradient(to left, #61FFB3 0%, #7C99FF 70%)",
    },
    secondary: {
      main: "#ccd6f6",
      darkGrey: "#3D476B",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#111",
      tertiary: "#140F20",
      gradientText: {
        background: "linear-gradient(to left, #61FFB3 0%, #7C99FF 100%)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
      },
    },
    background: {
      main: "#141824"
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
