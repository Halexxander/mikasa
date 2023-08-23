import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  value: 0,
};

export const CounterSlice = createSlice({
  name: "count",
  initialState: initialValue,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});


export const {increment} = CounterSlice.actions
export default CounterSlice.reducer