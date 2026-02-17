import { configureStore } from "@reduxjs/toolkit";
import { recipesReducer } from "../features/FirstSlice";

export const store =  configureStore ({
    reducer:{
        recipes:recipesReducer
    }
})

