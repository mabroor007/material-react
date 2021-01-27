import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Snack {
  type: "success" | "error";
  visible: boolean;
  message: string;
}

export interface AppSnackBar {
  Snack: Snack;
}

const initialAppSnackBarState: AppSnackBar = {
  Snack: {
    type: "success",
    visible: false,
    message: "",
  },
};

const AppSnackBarSlice = createSlice({
  name: "AppSnackBar",
  initialState: initialAppSnackBarState,
  reducers: {
    showSnack: (state, action: PayloadAction<Snack>) => {
      state.Snack = action.payload;
    },
    hideSnack: (state) => {
      state.Snack = { type: state.Snack.type, visible: false, message: "" };
    },
  },
});

export const { showSnack, hideSnack } = AppSnackBarSlice.actions;

export default AppSnackBarSlice.reducer;
