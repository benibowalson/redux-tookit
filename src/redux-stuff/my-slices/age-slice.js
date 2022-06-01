import { createSlice } from "@reduxjs/toolkit";

export const ageSlice = createSlice({
  name: "myAgeSlice",
  initialState: { age: 44 },
  reducers: {
    incrementAge: (state, action) => {
      state.age += action.payload;
    },
    decrementAge: (state, action) => {
      state.age -= action.payload;
    },
    resetAge: (state) => {
      state.age = 44;
    },
  },
});

export const { incrementAge, decrementAge, resetAge } = ageSlice.actions;
export default ageSlice.reducer;
