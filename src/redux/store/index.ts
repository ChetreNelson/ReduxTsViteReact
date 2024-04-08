import { configureStore } from "@reduxjs/toolkit";
import counterslice from "../slice";
import cartSlice from "../slice/cartSlice";
import todoSlice from "../slice/todoSlice";
import Login from "../slice/Login";
import { myAPi } from "../api/api";
import { rtkquerySlice } from "../slice/rtkqueryslice";

export const store = configureStore({
  reducer: {
    [myAPi.reducerPath]:myAPi.reducer,
    [rtkquerySlice.name]:rtkquerySlice.reducer,
    counter: counterslice,
    cart: cartSlice,
    todo: todoSlice,
    form: Login,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(myAPi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
