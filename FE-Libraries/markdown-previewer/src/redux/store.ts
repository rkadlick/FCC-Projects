// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "./editorSlice";

export const store = configureStore({
  reducer: {
    editor: editorReducer,
  },
});

// Type definitions for Redux hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
