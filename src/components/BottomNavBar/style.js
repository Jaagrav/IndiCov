export default function styles(theme) {
    return {
        bottomNavBar: {
            position: 'fixed',
            width: '100%',
            height: 65,
            bottom: 0,
            left: 0,
            margin: 'auto',
            backgroundColor: theme.palette.background.containerColor,
            display: 'grid',
            gridTemplateColumns: "1fr 1fr"
        },
        otherBtns: {
            width: "100%",
            display: 'grid',
            gridTemplateColumns: "1fr 1fr"
        },
        otherBtn: {
            padding: "20px 0",
            // height: "100%",
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
        tabs: {
            width: "100%"
        },
        tab: {
            padding: "20px 0",
            height: "100%",
            width: "50%",
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
            height: "100%",
            background: `${theme.palette.highlight.blue}4a`,
            borderBottom: `2px solid ${theme.palette.highlight.blue}`,
            right: 'unset',
            left: 0,
            zIndex: -9,
          },
    }
}