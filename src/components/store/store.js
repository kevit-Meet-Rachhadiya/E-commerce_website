import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../slice/slice";
import xyzSlice from "../slice/xyz";

const store = configureStore({
  reducer: {
    cartItems: cartSlice,
    xyz: xyzSlice,
  },
});

export default store;
