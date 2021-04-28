export default function styles(theme) {
    return {
        root: {
            flexGrow: 1,
            display: 'flex',
            margin: "34px 0",

        },
        tabIndicator: {
            width: "100%",
            height: "100%",
            background: `${theme.palette.highlight.blue}4a`,
            right: 'unset',
            left: 0,
            zIndex: -9,
        },
        tabs: {
            width: 80
        },
        tab: {
            padding: "20px 0",
            width: "100%",
            minWidth: "unset",
            maxWidth: "unset",
            fontSize: "1.54rem",
            borderRadius: 0,
            color: theme.palette.text.secondary,
            margin: "6px 0",
            "&.Mui-selected": {
              color: theme.palette.highlight.blue,
              "&[data-type='confirmed']": {
                  color: theme.palette.highlight.blue,
              },
              "&[data-type='recovered']": {
                  color: theme.palette.highlight.green,
              },
              "&[data-type='active']": {
                  color: theme.palette.highlight.yellow,
              },
              "&[data-type='deaths']": {
                  color: theme.palette.highlight.red,
              }
            },
        },  
        cardConfirmedFigures: {
            backgroundColor: `${theme.palette.highlight.blue}4a`,
        },
        cardRecoveredFigures: {
            backgroundColor: `${theme.palette.highlight.green}4a`,
        },
        cardActiveFigures: {
            backgroundColor: `${theme.palette.highlight.yellow}4a`,
        },
        cardDeathsFigures: {
            backgroundColor: `${theme.palette.highlight.red}4a`,
        }
    }
}