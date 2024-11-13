import { configureStore } from '@reduxjs/toolkit'
import mainSlice from '../slices/mainSlice.js'

export default configureStore({
    reducer: {
        core:mainSlice
    },
})