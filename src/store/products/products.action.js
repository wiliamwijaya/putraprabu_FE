import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductsAPI, postProductAPI } from "./products.reducer";

const initialState = {
  show: {},
  data: [],
  isLoading: false,
  error: "",
  success: "",
  status: "idle",
  statusCreate: true,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await getProductsAPI();
    console.log(response);
    return response.data;
  }
);

export const postProduct = createAsyncThunk(
  "products/postProduct",
  async (data) => {
    const response = await postProductAPI(data);
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: "posts",
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
    [postProduct.pending]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [postProduct.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        statusRegister: true,
      };
    },
    [postProduct.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error.message,
        statusRegister: false,
      };
    },
  },
});

export const { setUsers, setError } = productsSlice.actions;

export const data = (state) => state.products;

export default productsSlice.reducer;
