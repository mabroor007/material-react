import { Props, useDeletedPage } from "./useDeletedPage"

export const Deleted: React.FC<Props> = () => {
  const {
    Grid,
    Typography,
    DeletedTodoCard,
    classes,
    todos
  } = useDeletedPage()

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography className={classes.heading} variant="h6">
          Deleted Todos
        </Typography>
      </Grid>
      <Grid container>
        {todos &&
          todos.map((todo) => {
            if (todo.deleted) {
              return (
                <Grid key={todo.id} item xs={12}>
                  <DeletedTodoCard Todo={todo} />
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
