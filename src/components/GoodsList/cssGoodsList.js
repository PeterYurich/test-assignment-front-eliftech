import { palette } from "uiSettings/muiSettings";

export const css = {
    mainBox: {
        display: 'flex',
        flexGrow: 1,
        maxHeight: "100vh",
    },
    goodListBox: {
        flexGrow: 1,
        border: `2px solid ${palette.primary.main}`,
        borderRadius: 1,
        padding: 1,
        
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        gap: 2,
        // flexWrap: 'wrap',
    },
    goodCard: {
        width: 180,
        height: 290,
    },
    goodName: {
        textTransform: "capitalize"
    }
}