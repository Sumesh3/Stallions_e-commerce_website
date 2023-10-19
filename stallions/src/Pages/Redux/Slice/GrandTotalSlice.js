import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    finalAmount : 0,
    HolderName:""
}

export const GrandTotalSlice = createSlice({
    name : "GrandTotal",
    initialState,
    reducers:{
        GrandTotals:(state,action)=>{
            state.finalAmount = action.payload
        },
        HolderName:(state,action)=>{
            state.HolderName = action.payload
        }
    }
})

export const {GrandTotals, HolderName} = GrandTotalSlice.actions
export default GrandTotalSlice.reducer