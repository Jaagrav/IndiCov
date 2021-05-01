export default function style(theme) {
    return {
      container: {
        width: '100%',
        padding: 14,
        "&.Mui-selected": {
          padding: "14px 0",
        },
      },
      infoHolder: {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        background: theme.palette.background.containerColor,
        borderRadius:'8px',
        padding: 16,
        margin: '32px 0'
      },
      infoHolder2: {
        display:'flex',
        alignItems:'center',
        width:'100%',
        background: theme.palette.background.containerColor,
        borderRadius:'8px',
        padding: 16
      },
      role:{
        color: theme.palette.highlight.blue,
        fontWeight:'600'
      },
      image: {
        width: "180px",
        border: '6.30612px solid' + theme.palette.background.containerColor,
        objectFit:'contain',
        borderRadius:'50%',
        marginTop:'-4rem'        
      },
      image2: {
        width: "120px",
        height: '120px',
        border: '6.30612px solid' + theme.palette.background.containerColor,
        objectFit:'contain',
        borderRadius:'50%',           
      },
      imageWrapper:{
        marginRight: 14,
        display:'flex',
        justifyContent:'center'
      },
      title: {
        color: theme.palette.text.primary,
        
      },
      description: {
        color: theme.palette.text.secondary,
      },
      member:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        margin:'1rem',
      },
      infoBox:{
        width:'100%',
        paddingTop:'1rem',
        
      }
    };
  }
  