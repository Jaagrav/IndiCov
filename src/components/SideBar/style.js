export default function styles(theme) {
    return {
        brandingName: {
            textAlign: 'center',
            padding: "20px 0"
        },
        secondaryColorBrandingName: {
            display: "inline-block",
            color: theme.palette.highlight.blue
        },
        drawerPaper: {
            position: "fixed",
            width: 100,
            backgroundColor: "transparent",
            border: "none",
        },
        tab: {
            padding: "20px 0",
            width: "100%",
            minWidth: "unset",
            maxWidth: "unset",
            fontSize: "1.54rem",
            borderRadius: 0,
            color: theme.palette.text.secondary,
            "&.Mui-selected": {
              color: theme.palette.highlight.blue,
            },
        },        
        tabIndicator: {
            width: "100%",
            background: `${theme.palette.highlight.blue}4a`,
            borderLeft: `2px solid ${theme.palette.highlight.blue}`,
            right: 'unset',
            left: 0,
            zIndex: -9,
          },
    }
}