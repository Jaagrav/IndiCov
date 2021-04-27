export default function styles(theme) {
    return {
        blueText: {
            display: "inline-block",
            color: theme.palette.highlight.blue
        },
        card: {
            backgroundColor: theme.palette.background.containerColor
        },
        cardType: {
            color: theme.palette.text.secondary,
            fontWeight: 500
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