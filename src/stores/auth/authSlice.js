import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  user: null,
  isAuthenticated: false,
  loginAttempts: 0,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    incrementLoginAttempts: (state) => {
      state.loginAttempts += 1;
    },
    resetLoginAttempts: (state) => {
      state.loginAttempts = 0;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const {
  setEmail,
  setPassword,
  incrementLoginAttempts,
  resetLoginAttempts,
  loginSuccess,
  logout,
} = authSlice.actions;
export default authSlice.reducer;
