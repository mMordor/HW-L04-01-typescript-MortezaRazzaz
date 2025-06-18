import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { costs, DATA, incomes, transactionStateType } from "../types/transactionTypes";


let init: transactionStateType;
const localStore = localStorage.getItem(DATA);
if(localStore){
    init = JSON.parse(localStore)
}else{
    init ={
        costs: [],
        incomes: [],
    }
}

const transactionSlice = createSlice({
    name:"transaction",
    initialState:init,
    reducers:{
        addIncome:{
            reducer: (state ,action: PayloadAction<incomes>)=>{
                state.incomes.push(action.payload)
                localStorage.setItem(DATA,JSON.stringify(state))
            },
            prepare:(item:incomes)=>{
                return{
                    payload:item
                }
            }
        },
        removeIncome:{
            reducer: (state ,action: PayloadAction<number>)=>{
                const index = state.incomes.findIndex((item)=>item.id == action.payload)
                state.incomes.splice(index,1)
                localStorage.setItem(DATA,JSON.stringify(state))
            },
            prepare:(item:number)=>{
                return{
                    payload:item
                }
            }
        },
        addCost:{
            reducer: (state ,action: PayloadAction<costs>)=>{
                state.costs.push(action.payload)
                localStorage.setItem(DATA,JSON.stringify(state))
            },
            prepare:(item:costs)=>{
                return{
                    payload:item
                }
            }
        },
        removeCost:{
            reducer: (state ,action: PayloadAction<number>)=>{
                const index = state.costs.findIndex((item)=>item.id == action.payload)
                state.costs.splice(index,1)
                localStorage.setItem(DATA,JSON.stringify(state))
            },
            prepare:(item:number)=>{
                return{
                    payload:item
                }
            }
        },
        
    }

})

export default transactionSlice.reducer
export const transactionActions = transactionSlice.actions
