import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: "",
  name: "cart",
  reducers: {
    addItem: (state, action) => action.payload,
    
  },
});
export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
