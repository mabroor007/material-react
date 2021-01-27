import { Grid, makeStyles, Typography } from "../../../Material";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/api";
import { DeletedTodoCard } from "../../Cards/DeletedCard";

export interface Props {}

const useStyles = makeStyles({
  heading: {
    fontWeight: "normal",
    margin: "1rem",
  },
});

export const useDeletedPage = () => {
  const classes = useStyles();
  const todos = useSelector((state: RootState) => state.Todo);

  return {
    Grid,
    Typography,
    DeletedTodoCard,
    classes,
    todos
  };
};
