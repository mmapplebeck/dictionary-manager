import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

import AppHeader from "./AppHeader";
import AppNav from "./AppNav";

export const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppHeader onClick={handleDrawerToggle} />
      <AppNav handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />

      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}

export default App;
