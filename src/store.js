import {configureStore} from "@reduxjs/toolkit"
import postsFetch from "./apiSlice"


export const store = configureStore({
    reducer: {
        postsFetch,
    }
})