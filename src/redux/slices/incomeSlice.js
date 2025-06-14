import { createSlice } from "@reduxjs/toolkit";

let init = [];

if(localStorage.getItem("Data")){
    init = JSON.parse(localStorage.getItem("Data")).incomes
}else{
    init = {
        costs: [],
        incomes: []
    };

    localStorage.setItem("Data",JSON.stringify(init));
}


export const incomeSlice = createSlice({
    name: "incomes",
    initialState: init,
    reducers: {
        addIncomeTransaction(state,action){
            state.push({...action.payload});
            localStorage.setItem("Data",JSON.stringify({
                ...init,incomes:state
            }))
        },
        removeIncomeTransaction(state,action){
            const index = state.findIndex((item)=>item.id == action.payload);
            state.splice(index,1);
            localStorage.setItem("Data",JSON.stringify({
                ...init,incomes:state
            }))
        },
    }
})

export const incomeActions = incomeSlice.actions;