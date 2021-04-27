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
          backgroundAttachment: "fixed"
        },
    },
    app: {
      position: "absolute",
      top: 0,
      left: 0,
      margin: "auto",
      height: "100%",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "auto 1fr"
    },
    appContainer: {
      display: "flex",
      justifyContent: "center"
    }
  }
}