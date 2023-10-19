import { configureStore } from "@reduxjs/toolkit";
import GrandTotalReducer from "../Slice/GrandTotalSlice";
import ProductViewReducer from "../Slice/ProductViewSlice";

export const store = configureStore({
    reducer:{
        GrandTotal:GrandTotalReducer,
        product:ProductViewReducer
    }
})