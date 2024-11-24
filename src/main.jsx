import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Mainlayout from "./layouts/Mainlayout.jsx";
import {Provider} from 'react-redux'
import store from './store/store.js'
import {createTheme, ThemeProvider} from "@mui/material";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Cart, Home, Supermarket} from './pages'


const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(255 0 76)'
        },
        secondary: {
            main: '#22092C'
        },
        success: {
            main: '#36e7a1'
        }
    },
    typography: {
        fontFamily: 'Yekan'
    }
});

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Mainlayout/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                } ,
                {
                    path: '/supermarket',
                    element: <Supermarket/>

                } ,
                {
                    path: '/cart',
                    element: <Cart/>
                }
            ]
        }
    ]
)


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>


            <ThemeProvider theme={theme}>

                <RouterProvider router={router}>


                    <Mainlayout/>
                </RouterProvider>
            </ThemeProvider>
        </Provider>

    </StrictMode>
)
