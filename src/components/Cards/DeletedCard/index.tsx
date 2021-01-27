import { Props, useDeletedCard } from "./useDeletedCard";

export const DeletedTodoCard: React.FC<Props> = ({ Todo }) => {
  const {
    Paper,
    classes,
    Grid,
    Avatar,
    AssignmentIcon,
    Typography,
    Button,
    ButtonGroup,
    handlePermanentDeleteClick,
    handleRestoreClick,
    RestoreIcon,
    DeleteIcon,
  } = useDeletedCard(Todo)

  return (
    <Paper className={classes.paper}>
      <Grid container wrap="wrap" spacing={2}>
        <Grid item>
          <Avatar className={classes.green}>
            <AssignmentIcon />
          </Avatar>
        </Grid>
        <Grid item xs>
          <Typography className={classes.title} variant="body1">
            {Todo.title}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <ButtonGroup
          className={classes.btnGroup}
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
          size="small"
        >
          <Button
            onClick={handleRestoreClick}
            className={classes.doneBtn}
            startIcon={<RestoreIcon />}
          >
            Restore
          </Button>
          <Button
            onClick={handlePermanentDeleteClick}
            className={classes.deleteBtn}
            startIcon={<DeleteIcon />}
          >
            PERMANENT DELETE
          </Button>
        </ButtonGroup>
      </Grid>
    </Paper>
  );
};
