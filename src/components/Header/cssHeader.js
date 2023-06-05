import { palette } from "uiSettings/muiSettings"

export const css = {

    mainBox: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        marginRight: 4,
        pt: 2,
        pb: 2,
        backgroundColor: palette.background.paper,
        flexWrap: 'wrap',
        borderBottom: `2px solid ${palette.primary.light}`,
    },

    slogan: {
        color: palette.primary.main
    },
}