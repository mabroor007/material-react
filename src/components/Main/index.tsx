import { Props,useMain } from "./useMain"

export const Main: React.FC<Props> = () => {
  const {
    classes,
    page,
    Remaining,
    Pages,
    Deleted,
    Completed,
    Snack,
    Paper
  } = useMain()

  return (
    <div className={classes.root}>
      <Paper className={classes.back} square>
        {page === Pages.Remaining ? <Remaining /> : null}
        {page === Pages.Completed ? <Completed /> : null}
        {page === Pages.Deleted ? <Deleted /> : null}
        <Snack />
      </Paper>
    </div>
  );
};
