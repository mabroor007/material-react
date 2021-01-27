import { Grid, makeStyles, Typography } from "../../../Material";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/api";
import { CompletedTodoCard } from "../../Cards/CompletedCard";

export interface Props {}

const useStyles = makeStyles({
  heading: {
    fontWeight: "normal",
    margin: "1rem",
  },
});

export const useCompletedPage = () => {
  const classes = useStyles();
  const todos = useSelector((state: RootState) => state.Todo);

  return {
    todos,
    classes,
    Grid,
    Typography,
    CompletedTodoCard
  };
};
