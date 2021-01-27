import { createSlice } from "@reduxjs/toolkit";

export interface IOverLay {
  AddTodoOverLay: boolean;
}

const initialState: IOverLay = {
  AddTodoOverLay: false,
};

const OverLaySlice = createSlice({
  name: "OverLay",
  initialState,
  reducers: {
    showAddTodoOverLay: (state) => {
      state.AddTodoOverLay = true;
    },
    hideAddTodoOverLay: (state) => {
      state.AddTodoOverLay = false;
    },
  },
});


export const { showAddTodoOverLay,hideAddTodoOverLay } = OverLaySlice.actions

export default OverLaySlice.reducer
