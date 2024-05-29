import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    userName: "",
  },
  reducers: {
    login: (state, action) => {
      const user = action.payload;
      state.userName = user.name;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
