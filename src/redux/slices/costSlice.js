import { createSlice } from "@reduxjs/toolkit";

export const costSlice = createSlice({
    name:"costs",
    initialState:[],
    reducers:{
        addCostTransaction(state,action){
            state.push({...action.payload})
        },
        removeCostTransaction(state,action){
            const index = state.findIndex((item)=>item.id == action.payload);
            state.splice(index,1);
        },
    }
})


export const costsAcions = costSlice.actions;