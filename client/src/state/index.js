import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light", // default theme of app
  user: null,
  token: null,
  userId: null,
  userRole: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.userId = action.payload.userId; // Set the userId in the state
      state.userRole = action.payload.userRole;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
      state.userId = null; // Clear the userId in the state
      state.userRole = null;
    },
  },
});

export const { setMode, setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
