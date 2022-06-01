import { createSlice } from "@reduxjs/toolkit";

export const skinColorSlice = createSlice({
  name: "skincolor",
  initialState: { skin_color: "white" },
  reducers: {
    darkenColor: (state) => {
      state.skin_color = "gray";
    },
    lightenColor: (state) => {
      state.skin_color = "aqua";
    },
    changeColor: (state, action) => {
      state.skin_color = action.payload;
    },
  },
});

export const { darkenColor, lightenColor, changeColor } =
  skinColorSlice.actions;
export default skinColorSlice.reducer;
