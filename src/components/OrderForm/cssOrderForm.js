import { palette } from "../../uiSettings/muiSettings" 

export const css = {
    errorText: {
        position: 'absolute',
        top: '37px',
        fontSize: '10px',
        left: '0',
        padding: '5px 20px',
        color: palette.warning.main,
        zIndex: '5',
    },
    formBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
    }
}