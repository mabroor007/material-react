import { AddIcon, Grid, makeStyles, Fab, Typography } from "../../../Material";
import { useSelector } from "react-redux";
import {
  RootState,
  useAppDispatch,
  showAddTodoOverLay,
} from "../../../Store/api";
import { BasicTodoCard } from "../../Cards/BasicCard";
import { OverLay } from "../../OverLay";

// styles
const useStyles = makeStyles({
  heading: {
    fontWeight: "normal",
    margin: "1rem",
  },
  fab: {
    position: "fixed", bottom: "70px",
    right: "1rem",
  },
});

// Props
export interface Props {}

// Hook
export const useRemainingPage = () => {
  const classes = useStyles();
  const todos = useSelector((state: RootState) => state.Todo);
  const dispatch = useAppDispatch();

  const handleOpenAddTodoOverlay = () => {
    dispatch(showAddTodoOverLay());
  };

  return {
    Grid,
    Typography,
    classes,
    todos,
    BasicTodoCard,
    Fab,
    handleOpenAddTodoOverlay,
    AddIcon,
    OverLay
  };
};
