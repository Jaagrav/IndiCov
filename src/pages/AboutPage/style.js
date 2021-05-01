export default function styles(theme) {
    return {

        aboutPage: {
            position: 'relative',
            margin: "auto",
            verticalAlign: "middle",
            padding: "0 16px",
            paddingBottom: 120
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
        title: {
            width: "100%",
            textAlign: "center",
            color: theme.palette.highlight.blue,
            fontWeight:'500',
            display:'inline-block'
        },
        prevention_title:{
            color: theme.palette.highlight.blue,
            fontWeight:'500',
            textAlign:'center'
        },
        title_underline:{
            display:'inline-block',
            textDecoration: 'underline'
        },
        info:{
            color: theme.palette.text.secondary,
            fontSize:'1.2rem',
            width: '100%',
            margin: '24px 0',
            textAlign: 'left',
        },
        about_main:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            padding: '40px 0'
        },
        brandingName: {
            textAlign: 'center',
            padding: "20px 0 0 0"
        },
        secondaryColorBrandingName: {
            display: "inline-block",
            color: theme.palette.highlight.blue
        },
        sources_info: {
        }
    }
}
