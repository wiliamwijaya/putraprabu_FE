import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAPI, registerAPI } from "./auth.reducer";

const initialState = {
  users: [],
  status: false,
  loading: false,
  error: null,
};

export const usersLogin = createAsyncThunk("users/login", async (data) => {
  const response = await loginAPI(data);
  return response.data;
});

export const usersRegister = createAsyncThunk(
  "users/register",
  async (data) => {
    const response = await registerAPI(data);
    return response.data;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: {
    [usersLogin.pending]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [usersLogin.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        status: true,
      };
    },
    [usersLogin.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error.message,
        status: false,
      };
    },
    [usersRegister.pending]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [usersRegister.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        statusRegister: true,
      };
    },
    [usersRegister.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error.message,
        statusRegister: false,
      };
    },
  },
});

export const { setUsers, setError } = usersSlice.actions;

export const users = (state) => state.users;

export default usersSlice.reducer;
