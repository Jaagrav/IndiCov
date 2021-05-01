export default function style(theme) {
  return {
    tip: {
      margin: "40px 5rem",
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      padding: " 0 16px",
      [theme.breakpoints.down("sm")]: {
        margin: "10px 0",
      },
    },
    infoHolder: {
      display: "flex",
      padding: "20px 0 20px 20px",
      flexDirection: "column",
      justifyContent: "center",
    },
    imageHolder: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
     
      [theme.breakpoints.down("sm")]: {
        height: 100,
        width: 100,
      },
    },
    image: {
      width: "100%",
      padding: "0% 20% 0% 0%"
    },
    title: {
      color: theme.palette.text.primary,
      marginBottom: 8,
    },
    description: {
      color: theme.palette.text.secondary,
    },
  };
}
