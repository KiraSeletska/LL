import { configureStore } from "@reduxjs/toolkit";
import { dictionarySlice } from "./dictionarySlice";

export const store = configureStore({
    reducer: {
        [dictionarySlice.name]: dictionarySlice.reducer,
    }
})