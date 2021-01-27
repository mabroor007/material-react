import { Pages } from "../../Store/Screen/Screen";
import { useSelector } from "react-redux";
import { Paper, makeStyles } from "../../Material";
import { RootState } from "../../Store/Store";
import { Remaining } from "../Pages/RemainingPage";
import { Deleted } from "../Pages/DeletedPage";
import { Completed } from "../Pages/CompletedPage";
import { Snack } from "../SnackBars";

const useStyles = makeStyles({
  root: {
    marginTop: "56px",
  },
  back: {
    height: "calc(100vh - 56px - 56px)",
    width: "100%",
    overflowY: "scroll",
    overflowX: "hidden",
    backgroundColor: "#303030",
  },
});

export interface Props {}


export const useMain = () => {
  const classes = useStyles();
  const page = useSelector((state: RootState) => state.Screen.page);

  return {
    classes,
    page,
    Remaining,
    Pages,
    Deleted,
    Completed,
    Snack,
    Paper
  }
}

