import { useAppDispatch, RootState } from "./Store";
import { showAddTodoOverLay, hideAddTodoOverLay } from "./OverLay";
import { setScreen } from "./Screen/Screen"
import { showSnack } from "./SnackBar"

import {
  removeTodo,
  completedTodo,
  ITodo,
  unCompleteTodo,
  restoreTodo,
  permanentlyDeleteTodo,
  addTodo
} from "./Todo/TodoSlice";

export {
  showSnack,
  addTodo,
  setScreen,
  useAppDispatch,
  showAddTodoOverLay,
  hideAddTodoOverLay,
  restoreTodo,
  permanentlyDeleteTodo,
  removeTodo,
  completedTodo,
  unCompleteTodo,
};

export type { ITodo, RootState };
