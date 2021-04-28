export default function styles(theme) {
    return {
        root: {
            display: "grid",
            gridTemplateColumns: "80px 1fr",

            margin: "34px 0",
            [theme.breakpoints.down('md')]: {
                gridTemplateColumns: "1fr",
                gridGap: 16,
                gridTemplateRows: "1fr 85px",
            },
            
            maxHeight: 400,
        },
        chart: {
            width: "100%",
            "& canvas": {
                maxWidth: "100%",
                maxHeight: "75%",
            },
        },
        tabIndicator: {
            width: "100%",
            height: "100%",
            background: `${theme.palette.highlight.blue}4a`,
            right: 'unset',
            left: 0,
            zIndex: -9,
            borderRadius: 4,
        },
        tabs: {
            width: "100%",
        },
        tab: {
            height: "100%",
            padding: "20px 0",
            minWidth: "unset",
            maxWidth: "unset",
            fontSize: "1.54rem",
            borderRadius: 0,
            color: theme.palette.text.secondary,
            margin: "10px 0",
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
            [theme.breakpoints.down('md')]: {
                width: "25%",
            }
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
        },
        confirmedColor: {
            color: theme.palette.highlight.blue, 
        },
        recoveredColor: {
            color: theme.palette.highlight.green, 
        },
        testedColor: {
            color: theme.palette.highlight.yellow,              
        },  
        deathsColor: {
            color: theme.palette.highlight.red,
        },
        stateName: {
            textAlign: 'right'
            // position: 'absolute',
        },
        typeName: {
            textAlign: 'right'
            // position: 'absolute',
        }
    }
}