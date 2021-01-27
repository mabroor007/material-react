import React from "react";
import { useOverLay, Slide, TransitionProps } from "./useOverLay";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const OverLay: React.FC = () => {
  const {
    text,
    AddTodoOverLay,
    handleClose,
    handleAddTodoClick,
    classes,
    Button,
    Dialog,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    TextField,
    Grid,
    CloseIcon,
    handleTextFieldChange
  } = useOverLay();

  return (
    <div>
      <Dialog
        fullScreen
        open={AddTodoOverLay}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar style={{ backgroundColor: "#424242" }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Todo
            </Typography>
            <Button autoFocus color="inherit" onClick={handleAddTodoClick}>
              ADD
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container justify="center">
          <Grid item xs={11}>
            <TextField
              value={text}
              onChange={handleTextFieldChange}
              style={{ width: "100%", marginTop: "1rem" }}
              id="filled-multiline-static"
              label="Task"
              multiline
              rows={4}
              variant="filled"
            />
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
};
