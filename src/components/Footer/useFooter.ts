import {
  makeStyles,
  DeleteIcon,
  CheckIcon,
  ListIcon,
  BottomNavigation,
  BottomNavigationAction,
} from "../../Material";
import { useState } from "react";
import { useAppDispatch, setScreen } from "../../Store/api";

const useStyles = makeStyles({
  bar: {
    position: "fixed",
    bottom: "0%",
    left: "0%",
    width: "100%",
    backgroundColor: "#424242",
  },
  root: {
    flexGrow: 1,
  },
});

export interface Props {}

export const useFooter = () => {
  const classes = useStyles();
  const [value, setValue] = useState<number>(0);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    dispatch(setScreen({ page: newValue }));
    setValue(newValue);
  };

  return {
    classes,
    value,
    handleChange,
    BottomNavigation,
    BottomNavigationAction,
    ListIcon,
    CheckIcon,
    DeleteIcon,
  };
};
