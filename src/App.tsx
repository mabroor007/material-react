import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import React from "react";
import "./App.css";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Grid xs={12} item>
          <AppBar>
            <Toolbar>
              {/* <Grid xs={1} item /> */}
              <Typography>mabroordev</Typography>
              <IconButton color="secondary">
                <DeleteIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
      <Grid item>content</Grid>
    </Grid>
  );
}

export default App;
