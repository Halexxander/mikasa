import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";


const Store = configureStore({
    count: CounterSlice
})

export default Store;