export default function styles(theme) {
    return {
        mapSvg: {
            height: 650,
            width: "100%",
        },
        land: {
            fill: "transparent",
            fillOpacity: 1,
            stroke: theme.palette.text.secondary,
            strokeOpacity: 1,
            strokeWidth: 2,
            "&:hover": {
                stroke: theme.palette.highlight.blue,
                fill: `${theme.palette.highlight.blue}4a`,
                cursor: "pointer",
            }
        },
        landSelected: {
            fill: `${theme.palette.highlight.blue} !important`
        },
        card: {
            backgroundColor: theme.palette.background.containerColor
        },
        cardType: {
            color: theme.palette.text.secondary
        },
        cardConfirmedFigures: {
            color: theme.palette.highlight.blue,
        },
        cardRecoveredFigures: {
            color: theme.palette.highlight.green,
        },
        cardActiveFigures: {
            color: theme.palette.highlight.yellow,
        },
        cardDeathsFigures: {
            color: theme.palette.highlight.red,
        }
    }
}

