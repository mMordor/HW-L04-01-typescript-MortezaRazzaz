import { configureStore} from "@reduxjs/toolkit"
import transactions from "./slices/transactionSlice"


const store = configureStore({
    reducer: transactions
})  

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;