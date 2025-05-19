import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/todo/TodoSlice";

// creating store
//store is the central repository of your application’s state
//You use this store in <Provider store={store}> at the root of your React app

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
