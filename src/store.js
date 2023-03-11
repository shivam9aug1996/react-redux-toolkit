import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
export const store = configureStore({
  //   preloadedState: {
  //     name: "shivam",
  //     age: "15",
  //   },
  reducer: userReducer,
});
