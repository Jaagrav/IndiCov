export default function styles(theme) {
  return {
    "@global": {
      "*": {
        margin: 0,
        fontFamily: "Poppins, sans-serif",
        textDecoration: "none",
        boxSizing: "border-box",
      },
      body: {
        background: theme.palette.background.gradient,
        height: "100%",
        margin: 0,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      },
      "::-webkit-scrollbar": {
        width: 8,
        background: theme.palette.background.containerColor
      },
      "::-webkit-scrollbar-track": {
        background: theme.palette.background.containerColor
      },
      "::-webkit-scrollbar-thumb": {
        background: theme.palette.text.secondary,
        borderRadius: 4
      },
      "::selection": {
        background: `${theme.palette.text.blue}4a`,
        color: theme.palette.highlight.primary,
      },
      [theme.breakpoints.down('sm')]: {
        "::-webkit-scrollbar": {
          display: "none"
        },
      }
    },
    app: {
      position: "absolute",
      top: 0,
      left: 0,
      margin: "auto",
      height: "100%",
      width: "100%",
    },
    appContainer: {
      display: "flex",
      justifyContent: "center",
      padding: "0 100px",
      [theme.breakpoints.down('sm')]: {
        padding: 0,
        paddingBottom: 55
      },
    }
  }
}