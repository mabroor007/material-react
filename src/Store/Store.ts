import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./Todo/TodoSlice";
import OverLayReducer from "./OverLay";
import { useDispatch } from "react-redux";
import ScreenReducer from "./Screen/Screen";
import AppSnackBarReducer from "./SnackBar"

export const store = configureStore({
  reducer: {
    Todo: TodoReducer,
    Screen: ScreenReducer,
    OverLay: OverLayReducer,
    SnackBar:AppSnackBarReducer
  },
});

// Extracting root state
export type RootState = ReturnType<typeof store.getState>;

// Extracting dispatch hook type
export type AppDispatch = typeof store.dispatch;

// Creating Application Dispatch hook
export const useAppDispatch = () => useDispatch<AppDispatch>();
