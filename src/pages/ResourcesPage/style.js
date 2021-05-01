export default function styles(theme) {
    return {
        homePage: {
            position: 'relative',
            margin: "auto",
            verticalAlign: "middle",
        },
        section: {
            width: "100%",
            position: 'relative',
            padding: `12px 20px !important`,
        },
        resourcesSection: {
            height: "calc(100vh - 100px)",
        },
        brandingName: {
            textAlign: 'center',
            padding: "12px 0 0 0"
        },
        secondaryColorBrandingName: {
            display: "inline-block",
            color: theme.palette.highlight.blue
        },
    }
}