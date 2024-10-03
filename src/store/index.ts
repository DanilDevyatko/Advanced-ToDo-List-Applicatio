import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./todo/slice";
import userSliceReducer from "./user/slice";

export const store = configureStore({
  reducer: {
    todos: todoSliceReducer,
    user: userSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
