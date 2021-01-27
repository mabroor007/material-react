import { Props,useHeader } from "./useHeader"

export const Header: React.FC<Props> = () => {
  const {
    Typography,
    Grid,
    AppBar,
    Toolbar,
    classes
  } = useHeader()

  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Grid alignItems="center" container>
            <Grid className={classes.bar} item xs={1}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="25px"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
            </Grid>
            <Grid xs={4} item>
              <Typography className={classes.barHeading} variant="h6">
                Todos
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

