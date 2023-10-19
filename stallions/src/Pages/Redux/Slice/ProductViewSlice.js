import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk('fetchProduct', async()=>{
    try {
       const data = await axios.get('http://127.0.0.1:8000/api/view_product_api').then((response) => {
            return response.data.data
           
        }).catch((error) => {

        })
        return data
    } catch (error) {
        
    }
})

const initialState = {
    ViewProduct:[],
    filterView:[],
    loading : false,
    error : false
}

export const ProductViewSlice = createSlice({
    name : "product",
    initialState,
    reducers :{
        filterProduct :(state,action)=>{
            state.filterView = action.payload
        }
    } ,

    extraReducers : (builder)=>{
        builder.addCase(fetchProduct.pending,(state, action)=>{
            state.loading = true
        })
        builder.addCase(fetchProduct.fulfilled,(state, action)=>{
            state.loading = false
            state.ViewProduct = action.payload
        })
        builder.addCase(fetchProduct.rejected,(state, action)=>{
            state.loading = false
            state.error = true
        })
    }
})

export const {filterProduct}=ProductViewSlice.actions
export default ProductViewSlice.reducer