import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import AppHeader from "./AppHeader";
import Page from "./Page";
import DictionaryList from "./DictionaryList";
import DictionaryOrRedirect from "./DictionaryOrRedirect";
import DictionaryHeader from "./DictionaryHeader";
import PageHeading from "./PageHeading";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: theme.mixins.toolbar,
  main: {
    width: "100%",
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  header: {
    marginBottom: theme.spacing(1)
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={classes.root}>
        <CssBaseline />
        <AppHeader />
        <main className={classes.main}>
          <div className={classes.toolbar} />
          <Container maxWidth="lg">
            <Switch>
              <Route
                path={`/:name`}
                render={({ match }) => (
                  <Page header={<DictionaryHeader name={match.params.name} />}>
                    <DictionaryOrRedirect />
                  </Page>
                )}
              />
              <Route>
                <Page
                  header={
                    <Grid container className={classes.header}>
                      <PageHeading heading="Dictionaries" />
                    </Grid>
                  }
                >
                  <DictionaryList />
                </Page>
              </Route>
            </Switch>
          </Container>
        </main>
      </div>
    </Router>
  );
}

export default App;
