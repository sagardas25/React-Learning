//import { configurestore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../feature/todo/TodoSlice";


export const store = configureStore({
  reducer: { todo :TodoSlice },
});
