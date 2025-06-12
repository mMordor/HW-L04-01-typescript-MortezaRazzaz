import { configureStore} from "@reduxjs/toolkit"
import { costSlice } from "./slices/costSlice"
import { incomeSlice } from "./slices/incomeSlice"


export const store = configureStore({
    reducer:{
        costs:costSlice.reducer,
        incomes:incomeSlice.reducer
    }
})