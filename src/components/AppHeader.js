import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 1
  }
}));

function AppHeader() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Dictionary Manager
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
