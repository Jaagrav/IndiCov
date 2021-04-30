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
        title: {
            color: theme.palette.highlight.blue,
            fontWeight:'500',
            padding:'10vh 0vh 5vh 0vh',
            display:'inline-block'
        },
        prevention_title:{
            color: theme.palette.highlight.blue,
            fontWeight:'500',
            padding:'10vh 0vh 5vh 0vh',
            margin:'0vw 5vw',
            textAlign:'center'
        },
        title_underline:{
            display:'inline-block',
            textDecoration: 'underline'
        },
        info:{
            color: theme.palette.text.secondary,
            margin:'0vw 5vw',
            fontSize:'1.2rem'
        },
        about_main:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }
    }
}
