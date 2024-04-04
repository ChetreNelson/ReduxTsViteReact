import { configureStore } from "@reduxjs/toolkit";
import counterslice from "../slice";
import cartSlice from "../slice/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterslice,
    cart:cartSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
