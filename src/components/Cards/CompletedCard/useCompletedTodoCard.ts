import {
  useAppDispatch,
  removeTodo,
  unCompleteTodo,
  ITodo,
} from "../../../Store/api";
import {
  UndoIcon,
  DeleteIcon,
  AssignmentIcon,
  makeStyles,
  Avatar,
  Grid,
  Paper,
  Button,
  ButtonGroup,
  Typography,
  green,
  red,
} from "../../../Material";

// Styles
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: "1rem",
  },
  paper: {
    overflow: "hidden",
    margin: "0rem 1rem 1rem 1rem",
    padding: "1rem",
    backgroundColor: green[900],
  },
  green: {
    color: "#fff",
    backgroundColor: green[500],
  },
  doneBtn: {
    backgroundColor: green[500],
  },
  deleteBtn: {
    backgroundColor: red[800],
  },
  title: {
    marginBottom: "1rem",
  },
  btnGroup: {
    marginLeft: "auto",
  },
});

// Props
export interface Props {
  Todo: ITodo;
}

// Hook 
export const useCompletedTodoCard = (Todo: ITodo) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const handleUnCompleteClick = () => {
    dispatch(unCompleteTodo({ id: Todo.id }));
  };
  const handleDeleteClick = () => {
    dispatch(removeTodo({ id: Todo.id }));
  };
  return {
    handleDeleteClick,
    handleUnCompleteClick,
    classes,
    Paper,
    Grid,
    Avatar,
    AssignmentIcon,
    Typography,
    ButtonGroup,
    Button,
    UndoIcon,
    DeleteIcon,
  };
};
