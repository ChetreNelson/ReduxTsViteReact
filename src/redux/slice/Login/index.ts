import { createSlice } from "@reduxjs/toolkit";


interface formState {
    names: { text: string }[];
  }
  
  // Define initial state
  const initialState: formState = {
    names: [{  text: "" }],
  };
export const FormSlice = createSlice({
  initialState,
  name: "form",
  reducers: {
    addInfo: (state, action) => {
      const name = {
        text: action.payload,
      };
      return{
        ...state,
        names:[...state.names,name]
      }
    },
  },
});
export const { addInfo } = FormSlice.actions;
export default FormSlice.reducer;
