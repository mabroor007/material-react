import { Props, useCompletedPage } from "./useCompletedPage";

export const Completed: React.FC<Props> = () => {
  const {
    todos,
    classes,
    Grid,
    Typography,
    CompletedTodoCard,
  } = useCompletedPage();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography className={classes.heading} variant="h6">
          Completed Todos
        </Typography>
      </Grid>
      <Grid container>
        {todos &&
          todos.map((todo) => {
            if (todo.completed && !todo.deleted) {
              return (
                <Grid key={todo.id} item xs={12}>
                  <CompletedTodoCard Todo={todo} />
                </Grid>
              );
            } else {
              return null;
            }
          })}
      </Grid>
    </Grid>
  );
};
