import { Props, useSnackBar, AlertProps, MuiAlert } from "./useSnackBar";

export const Snack: React.FC<Props> = () => {
  const { Snackbar, Snack, handleCloseSuccessSnack } = useSnackBar();

  return (
    <Snackbar
      open={Snack.visible}
      autoHideDuration={6000}
      onClose={handleCloseSuccessSnack}
    >
      <Alert onClose={handleCloseSuccessSnack} severity={Snack.type}>
        {Snack.message}
      </Alert>
    </Snackbar>
  );
};

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
