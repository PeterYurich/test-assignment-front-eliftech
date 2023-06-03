import { palette } from "uiSettings/muiSettings"

export const css = {

    navContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginRight: 4,
        pt: 2,
        pb: 2,
        flexWrap: 'wrap',
    },

    navLink: {
        color: palette.secondary.main,
        "&:hover": {
            backgroundColor: palette.secondary.main,
            color: palette.primary.main
        },
        textDecoration: 'none',
    },

    slogan: {
        color: palette.primary.main
    }
}