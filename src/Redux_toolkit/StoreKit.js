import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";


const StoreKit = configureStore({
    reducer: {
        count: CounterSlice
    }
})

export default StoreKit;