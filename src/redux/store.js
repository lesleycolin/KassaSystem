import { configureStore } from "@reduxjs/toolkit";
import { orderSlice } from "./slices/orderSlice";
import { userSlice } from "./slices/userSlice";

export default configureStore({
  reducer: {
    order: orderSlice.reducer,
    user: userSlice.reducer,
  },
});
