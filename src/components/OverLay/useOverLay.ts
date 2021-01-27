import { useState } from "react";
import {
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  TextField,
  Grid,
  CloseIcon,
  createStyles,
  makeStyles,
  Theme,
  TransitionProps,
} from "../../Material";
import {
  RootState,
  showSnack,
  addTodo,
  hideAddTodoOverLay,
  useAppDispatch,
} from "../../Store/api";

import { useSelector } from "react-redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  })
);

export const useOverLay = () => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const AddTodoOverLay = useSelector(
    (state: RootState) => state.OverLay.AddTodoOverLay
  );
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(hideAddTodoOverLay());
  };

  const handleTextFieldChange = (e: any) => {
    setText(e.target.value);
  };

  const handleAddTodoClick = () => {
    if (text.length < 8)
      return dispatch(
        showSnack({
          type: "error",
          message: "Please add a valid todo!",
          visible: true,
        })
      );
    dispatch(addTodo({ title: text }));
    dispatch(
      showSnack({
        type: "success",
        message: "Successfully Added todo!",
        visible: true,
      })
    );
    setText("");
    dispatch(hideAddTodoOverLay());
  };

  return {
    text,
    AddTodoOverLay,
    handleTextFieldChange,
    handleClose,
    handleAddTodoClick,
    classes,
    Button,
    Dialog,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Slide,
    TextField,
    Grid,
    CloseIcon,
  };
};

export { Slide };
export type { TransitionProps };
