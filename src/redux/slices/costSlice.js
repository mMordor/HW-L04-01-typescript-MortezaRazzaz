import { createSlice } from "@reduxjs/toolkit";

let init = {};

if(localStorage.getItem("Data")){
    init = JSON.parse(localStorage.getItem("Data"))
}else{
    init = {
        costs: [],
        incomes: []
    };

    localStorage.setItem("Data",JSON.stringify(init));
}


export const costSlice = createSlice({
    name: "costs",
    initialState: init.costs,
    reducers: {
        addCostTransaction(state,action){
            state.push({...action.payload});
            localStorage.setItem("Data",JSON.stringify({...init,costs:state}))
        },
        removeCostTransaction(state,action){
            const index = state.findIndex((item)=>item.id == action.payload);
            state.splice(index,1);
            localStorage.setItem("Data",JSON.stringify({...init,costs:state}))
        },
    }
})


export const costsAcions = costSlice.actions;