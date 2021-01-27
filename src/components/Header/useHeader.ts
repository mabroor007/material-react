import { makeStyles, Typography, Grid, AppBar, Toolbar } from "../../Material";

export interface Props {}

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "#424242",
  },
  bar: {
    display: "flex",
    alignItems: "center",
  },
  barHeading: {
    marginLeft: "1rem",
  },
});

export const useHeader = () => {
  const classes = useStyles();

  return {
    Typography,
    Grid,
    AppBar,
    Toolbar,
    classes
  };
};
