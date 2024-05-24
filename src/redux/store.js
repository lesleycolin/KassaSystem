import { configureStore } from "@reduxjs/toolkit";
import { orderSlice } from "./slices/orderSlice";

export default configureStore({
  reducer: {
    order: orderSlice.reducer,
  },
});
