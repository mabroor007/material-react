import { Snackbar } from "@material-ui/core";
import { useSelector } from "react-redux";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { RootState, useAppDispatch } from "../../Store/Store";
import { hideSnack } from "../../Store/SnackBar";

export interface Props {}

export const useSnackBar = () => {
  const Snack = useSelector((state: RootState) => state.SnackBar.Snack);
  const dispatch = useAppDispatch();

  const handleCloseSuccessSnack = () => {
    dispatch(hideSnack());
  };

  return {
    Snackbar,
    Snack,
    handleCloseSuccessSnack
  };
};

export { MuiAlert };

export type { AlertProps }
