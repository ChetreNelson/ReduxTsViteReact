import { configureStore } from "@reduxjs/toolkit";
import counterslice from "../slice";
import cartSlice from "../slice/cartSlice";
import todoSlice from "../slice/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterslice,
    cart: cartSlice,
    todo:todoSlice
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
