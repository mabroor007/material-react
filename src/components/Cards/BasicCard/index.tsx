import { Props, useBasicTodoCard } from "./useBasicTodoCard";

// Component
export const BasicTodoCard: React.FC<Props> = ({ Todo }) => {
  // All the stuff required by component
  const {
    Paper,
    Grid,
    Avatar,
    AssignmentIcon,
    Typography,
    classes,
    ButtonGroup,
    Button,
    handleDoneClick,
    handleDeleteClick,
    CheckIcon,
    DeleteIcon,
  } = useBasicTodoCard(Todo);

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
            onClick={handleDoneClick}
            className={classes.doneBtn}
            startIcon={<CheckIcon />}
          >
            DONE
          </Button>
          <Button
            onClick={handleDeleteClick}
            className={classes.deleteBtn}
            startIcon={<DeleteIcon />}
          >
            DELETE
          </Button>
        </ButtonGroup>
      </Grid>
    </Paper>
  );
};
