import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import userReducer from "../features/user/userSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    users: userReducer,
    cart: cartReducer,
  },
});
