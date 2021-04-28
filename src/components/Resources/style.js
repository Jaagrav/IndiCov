export default function styles(theme) {
    return {
        buttonBase: {
            width: "100%",
            marginBottom: 16,
        },
        card: {
            width: "100%",
            padding: "8px 16px",
            display: 'grid',
            gridGap: 16,
            gridTemplateColumns: "auto 1fr auto",
            background: theme.palette.background.containerColor,
            textAlign: "left",
            "& *": {
                margin: "auto 0"
            },
            "& svg": {
                fontSize: 24
            }
        },
        oxygenIconButton: {
            color: theme.palette.highlight.blue,
        },
        ambulanceIconButton: {
            color: theme.palette.highlight.green,
        },
        bedsIconButton: {
            color: theme.palette.highlight.yellow,
        },
        helplineIconButton: {
            color: theme.palette.highlight.red,
        },
        medicineIconButton: {
            color: theme.palette.highlight.teal,
        }
    }
}