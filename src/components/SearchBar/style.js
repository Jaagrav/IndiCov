export default function styles(theme) {
    return {
        autoComplete: {
            width: "100%"
        },
        autoCompleteLabel: {
            display: 'block',
        },
        autoCompleteInputBox: {
            display: 'flex',
            alignItems: 'center',
            padding: "4px 6px 4px 16px",
            border: `2px solid ${theme.palette.text.secondary}`,
            borderRadius: 9999
        },
        autoCompleteInput: {
            fontSize: theme.typography.subtitle1.fontSize,
            width: "100%",
            backgroundColor: "transparent",
            color: theme.palette.text.primary,
            border: "none",
            outline: 'none',
            "&::placeholder": {
                color: theme.palette.text.primary,
            }
        },
        autoCompleteBox: {
            width: "100%",
            margin: 0,
            padding: 4,
            zIndex: 1,
            position: 'absolute',
            listStyle: 'none',
            backgroundColor: theme.palette.background.containerColor,
            color: theme.palette.text.secondary,
            overflow: 'auto',
            maxHeight: 200,
            '& li': {
                padding: "14px 20px"
            },
            '& li:hover': {
                color: `${theme.palette.text.primary} !important`,
                backgroundColor: `${theme.palette.text.secondary} !important`,
            },
            '& li[data-focus="true"]': {
                backgroundColor: theme.palette.background.containerColor,
                color: theme.palette.text.secondary,
                cursor: 'pointer',
            },
            '& li:active': {
                backgroundColor: theme.palette.background.containerColor,
                color: theme.palette.text.secondary,
            },
        }
    }
}