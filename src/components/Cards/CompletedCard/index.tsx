import { Props, useCompletedTodoCard } from "./useCompletedTodoCard"


export const CompletedTodoCard: React.FC<Props> = ({ Todo }) => {

  //Stuf needed by component
  const {
    handleDeleteClick,
    handleUnCompleteClick,
    classes,
    Paper,
    Grid,
    Avatar,
    AssignmentIcon,
    Typography,
    ButtonGroup,
    Button,
    UndoIcon,
    DeleteIcon
  } = useCompletedTodoCard(Todo)


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
          <Button onClick={handleUnCompleteClick} className={classes.doneBtn} startIcon={<UndoIcon />}>
            UnComplete
          </Button>
          <Button onClick={handleDeleteClick} className={classes.deleteBtn} startIcon={<DeleteIcon />}>
            DELETE
          </Button>
        </ButtonGroup>
      </Grid>
    </Paper>
  );
};
