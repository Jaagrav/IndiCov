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
            strokeWidth: 2,
            stroke: `${theme.palette.text.secondary} !important`,
            fill: `${theme.palette.highlight.blue} !important`
        },
    }
}