import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slice/slice";

const store = configureStore({
  reducer: {
    cartItems: cartSlice.reducer,
  },
});

export default store;
