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
    }
}