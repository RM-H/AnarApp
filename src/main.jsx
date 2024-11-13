import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Mainlayout from "./layouts/Mainlayout.jsx";
import {Provider} from 'react-redux'
import store from './store/store.js'
import {createTheme, ThemeProvider} from "@mui/material";


const theme = createTheme({
    palette: {
        primary: {
            main: '#b20000'
        },
        secondary: {
            main: '#22092C'
        },
        third: {
            main: '#EEF5FF'
        },
        success: {
            main: '#186F65'
        }
    },
    typography: {
        fontFamily: 'Pinar'
    }
});

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>


            <ThemeProvider theme={theme}>

                <Mainlayout/>
            </ThemeProvider>
        </Provider>

    </StrictMode>,
)
