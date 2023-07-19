import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./state/index"


export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});