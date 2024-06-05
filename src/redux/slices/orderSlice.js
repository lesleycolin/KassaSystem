import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../../FirebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const initialState = {
  products: [],
  totalPrice: 0,
};

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (_, { getState, dispatch }) => {
    const state = getState().order;
    if (state.products.length === 0) {
      throw new Error("Cannot create an order with no products");
    }

    const order = {
      products: state.products,
      totalPrice: state.totalPrice,
      createdAt: serverTimestamp(),
    };

    await addDoc(collection(db, "orders"), order);
    dispatch(clearOrder());
  }
);

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
    clearOrder: (state) => {
      state.products = [];
      state.totalPrice = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createOrder.fulfilled, (state, action) => {});
    builder.addCase(createOrder.rejected, (state, action) => {
      console.error("Failed to create order:", action.error);
    });
  },
});

export const { addToOrder, removeFromOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
