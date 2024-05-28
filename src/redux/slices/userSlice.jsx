import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userLoggedIn: false,
    userData: null,
  },
  reducers: {
    login: (state, action) => {
      state.user.push(action.payload);
    },
    logout: (state) => {
      state.user = initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;