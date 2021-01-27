import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export enum Pages {
  Remaining,
  Completed,
  Deleted
}

export interface ScreenState {
  page: Pages
}

const initialScreenState:ScreenState = {
  page: Pages.Remaining
}

const ScreenSlice = createSlice({
  name:"Screen",
  initialState:initialScreenState,
  reducers:{
    setScreen: (state, action: PayloadAction<{page:Pages}>) => {
      state.page = action.payload.page
    }
  }
})

export const { setScreen } = ScreenSlice.actions;

export default ScreenSlice.reducer;
