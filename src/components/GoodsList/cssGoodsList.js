import { palette } from "uiSettings/muiSettings";

export const css = {
    goodListBox: {
        flexGrow: 1,
        border: `2px solid ${palette.primary.main}`,
        borderRadius: 1,
        padding: 1,
        maxHeight: "100vh",
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2
    },

    goodName: {
        textTransform: "capitalize"
    }
}