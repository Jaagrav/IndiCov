export default function styles(theme) {
    return {
        resourceCardHolder:{ 
            padding: "8px 0",
        },
        resourceCard: {
            padding: 16,
            height: '100%',
            backgroundColor: theme.palette.background.containerColor,
            display: "grid",
            gridTemplateRows: "1fr 1fr 1fr 1fr 10px auto",
        },
        phoneNums: {
            padding: "4px 0",
            color: theme.palette.text.secondary,
            "& a": {
                color: theme.palette.text.primary,
                marginLeft: 8
            }
        },
        district: {
            width: "100%",
            padding: "4px 0",
            color: theme.palette.text.secondary,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            "& span": {
                color: theme.palette.text.primary,
                marginLeft: 8
            }
        },
        resourceCardInfo: {
            width: "100%",
        },
        description: {
            padding: "4px 0",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
        },
        dividerHolder: {
            height: "10px",
        },
        divider: {
            backgroundColor: theme.palette.text.secondary
        },
        checkedOn: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'left',
            }
        },
        footer: {
            width: '100%',
            padding: "4px 0 0 0",
            color: theme.palette.text.secondary
        }
    }
}