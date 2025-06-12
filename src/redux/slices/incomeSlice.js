import { createSlice } from "@reduxjs/toolkit";

export const incomeSlice = createSlice({
    name:"incomes",
    initialState:[],
    reducers:{
        addIncomeTransaction(state,action){
            state.push({...action.payload})
        },
        removeIncomeTransaction(state,action){
            const index = state.findIndex((item)=>item.id == action.payload);
            state.splice(index,1);
        },
    }
})

export const incomeActions = incomeSlice.actions;