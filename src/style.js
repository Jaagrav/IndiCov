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
        }
    }
}