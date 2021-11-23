import {createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        type: 'standard',
        primary: {
            main: '#6573c3',            //#3f51b5
            light: '#6573c3',
            dark: '#2c387e',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#f50057',
            light: '#f73378',
            dark: '#ab003c',
            contrastText: '#ffffff',
        },
        background: {
            default: '#303030',
            paper: '#424242',
        },
        text: {
            primary: '#ffffff',
            secondary: 'rgba(255,255,255,0.7)',
            disabled: 'rgba(255,255,255,0.5)',
            hint: 'rgba(255,255,255,0.5)',
        },
        error: {
            main: '#f44336',
            light: '#f6685e',
            dark: '#aa2e25',
            contrastText: '#ffffff',
        },
    },
})

export default theme;