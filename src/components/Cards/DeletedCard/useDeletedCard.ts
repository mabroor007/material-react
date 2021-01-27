import {
  makeStyles,
  Avatar,
  Grid,
  Paper,
  Button,
  Typography,
  ButtonGroup,
  green,
  red,
  AssignmentIcon,
  RestoreIcon,
  DeleteIcon,
} from "../../../Material";
import {
  permanentlyDeleteTodo,
  ITodo,
  useAppDispatch,
  restoreTodo,
} from "../../../Store/api";

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
    backgroundColor: red[900],
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
    marginTop: "1rem",
  },
});

// Props
export interface Props {
  Todo: ITodo;
}

// Hook
export const useDeletedCard = (Todo: ITodo) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const handleRestoreClick = () => {
    dispatch(restoreTodo({ id: Todo.id }));
  };
  const handlePermanentDeleteClick = () => {
    dispatch(permanentlyDeleteTodo({ id: Todo.id }));
  };

  return {
    Paper,
    classes,
    Grid,
    Avatar,
    AssignmentIcon,
    Typography,
    Button,
    ButtonGroup,
    handlePermanentDeleteClick,
    handleRestoreClick,
    RestoreIcon,
    DeleteIcon,
  };
};
