import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./todo/todoSlice";
import userSliceReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    todos: todoSliceReducer,
    user: userSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
