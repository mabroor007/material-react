import { Props,useRemainingPage } from "./useRemainingPage"

export const Remaining: React.FC<Props> = () => {
  const {
    Grid,
    Typography,
    classes,
    todos,
    BasicTodoCard,
    Fab,
    handleOpenAddTodoOverlay,
    AddIcon,
    OverLay
  } = useRemainingPage()

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography className={classes.heading} variant="h6">
          Remaining Todos
        </Typography>
      </Grid>
      <Grid container>
        {todos &&
          todos.map((todo) => {
            if (!todo.completed && !todo.deleted) {
              return (
                <Grid key={todo.id} item xs={12}>
                  <BasicTodoCard Todo={todo} />
                </Grid>
              );
            } else {
              return null;
            }
          })}
      </Grid>
      <Fab
        className={classes.fab}
        onClick={handleOpenAddTodoOverlay}
        size="large"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
      <OverLay />
    </Grid>
  );
};
