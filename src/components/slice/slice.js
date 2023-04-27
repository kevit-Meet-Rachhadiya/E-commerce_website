import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalQuntity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const tempProduct = { ...action.payload, quantity: 1 };
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      } else {
        state.cart.push(tempProduct);
      }
      state.totalQuntity += 1;
      state.totalPrice += action.payload.price;
      state.totalPrice = Number(state.totalPrice.toFixed(2));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice;
