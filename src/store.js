import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/user_slice";

export const store = configureStore({
  reducer: {
    auth: userReducer,
  },
});
