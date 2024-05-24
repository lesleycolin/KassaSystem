import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: [],
  },
  reducers: {
    addToOrder: (state, action) => {
      state.order.push(action.payload);
    },
    removeFromOrder: (state, action) => {
      state.order = state.order.filter(
        (product) => product.id !== action.payload
      );
    },
    deleteOrder: (state) => {
      state.order = [];
    },
  },
});

export const { addToOrder, removeFromOrder, deleteOrder } = orderSlice.actions;

export default orderSlice.reducer;
