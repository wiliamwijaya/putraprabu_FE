import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../store/auth/auth.action";
// import productReducer from "../features/products/reducer";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    // products: productReducer,
  },
});
