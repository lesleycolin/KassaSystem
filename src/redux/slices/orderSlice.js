import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find(
        (item) => item.name === product.name
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.total += existingProduct.price;
      } else {
        state.products.push({ ...product, quantity: 1, total: product.price });
      }
      state.totalPrice += product.price;
    },
    removeFromOrder: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          state.products = state.products.filter(
            (item) => item.id !== product.id
          );
        } else {
          existingProduct.quantity -= 1;
          existingProduct.total -= existingProduct.price;
        }
        state.totalPrice -= product.price;
      }
    },
    deleteOrder: (state) => {
      state.products = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToOrder, removeFromOrder, deleteOrder } = orderSlice.actions;

export default orderSlice.reducer;
