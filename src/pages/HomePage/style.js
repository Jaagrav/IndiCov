export default function styles(theme) {
    return {
        homePage: {
            position: 'relative',
            margin: "auto",
            verticalAlign: "middle",

        },
        section: {
            position: 'relative',
            [theme.breakpoints.down('md')]: {
              padding: `20px !important`,
            },
        },
        brandingName: {
            textAlign: 'center',
            padding: "20px 0 0 0"
        },
        secondaryColorBrandingName: {
            display: "inline-block",
            color: theme.palette.highlight.blue
        },
    }
}

