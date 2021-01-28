import { v4 as uuid } from "uuid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Todo type
export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
  deleted: boolean;
}

// Initial State of slice
const TodoInitialState: ITodo[] = [];

// Creating the actual slice
const TodoSlice = createSlice({
  name: "Todo",
  initialState: TodoInitialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ title: string }>) => {
      state.unshift({
        completed: false,
        deleted: false,
        title: action.payload.title,
        id: uuid(),
      });
    },
    removeTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.deleted = true;
        }
      });
    },
    restoreTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.deleted = false;
        }
      });
    },
    unCompleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = false;
        }
      });
    },
    completedTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = true;
        }
      });
    },
    permanentlyDeleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.forEach((todo, idx) => {
        if (todo.id === action.payload.id) {
          state.splice(idx, 1);
        }
      });
    },
  },
});

// Exporting the reducer
export default TodoSlice.reducer;

// Exporting the actions
export const {
  addTodo,
  removeTodo,
  restoreTodo,
  completedTodo,
  unCompleteTodo,
  permanentlyDeleteTodo,
} = TodoSlice.actions;

// Creating async action
//export const getTodo = createAsyncThunk(
//"Todo/getTodo",
//async (id: number, { dispatch }) => {
//dispatch(loadingTodo(id))
//const response = await fetch(
//"https://jsonplaceholder.typicode.com/todos/" + id
//);
//const data: ITodo = await response.json();
//dispatch(addTodo(data))
//}
//);
//
//extraReducers: {
//[getTodo.pending.type]: () => console.log("Pending"),
//[getTodo.rejected.type]: () => console.log("Rejected"),
//[getTodo.fulfilled.type]: (state, action) => {
//state.push(action.payload);
//},
//},
