import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import AppHeader from "./AppHeader";
import Page from "./Page";
import DictionaryList from "./DictionaryList";
import DictionaryOrRedirect from "./DictionaryOrRedirect";

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

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppHeader />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route
              path={`/:name`}
              render={({ match }) => (
                <Page heading={`${match.params.name} Dictionary`}>
                  <DictionaryOrRedirect />
                </Page>
              )}
            />
            <Route>
              <Page heading="Dictionaries">
                <DictionaryList />
              </Page>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
