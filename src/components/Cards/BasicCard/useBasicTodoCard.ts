// importing Redux stuff
import {
  useAppDispatch,
  removeTodo,
  completedTodo,
  ITodo,
} from "../../../Store/api";

// Importing Ui Stuff
import {
  makeStyles,
  Avatar,
  Grid,
  Paper,
  Button,
  Typography,
  ButtonGroup,
  green,
  AssignmentIcon,
  red,
  CheckIcon,
  DeleteIcon,
} from "../../../Material";

// Props of Component
export interface Props {
  Todo: ITodo;
}

// Custom Styles
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

// Component Hook that will be used by component
export const useBasicTodoCard = (Todo: ITodo) => {
  // Creating classes
  const classes = useStyles();

  // Hook for sending actions
  const dispatch = useAppDispatch();

  // Handlers
  const handleDoneClick = () => {
    dispatch(completedTodo({ id: Todo.id }));
  };
  const handleDeleteClick = () => {
    dispatch(removeTodo({ id: Todo.id }));
  };

  return {
    Paper,
    Grid,
    Avatar,
    AssignmentIcon,
    Typography,
    classes,
    ButtonGroup,
    Button,
    handleDoneClick,
    handleDeleteClick,
    CheckIcon,
    DeleteIcon,
  };
};
