import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./slices/cardSlice";
export const store = configureStore({
  reducer: {
    // cart: cartReducer,
  },
});
