//configure store
import { configureStore } from "@reduxjs/toolkit";
import authReducer, { authSlice } from "./slices/auth.slice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authReducer,
  },
  devTools:process.env.NODE_ENV!=="production"
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
