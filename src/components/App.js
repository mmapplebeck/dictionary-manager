import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import AppHeader from "./AppHeader";
import Page from "./Page";
import DictionaryList from "./DictionaryList";
import DictionaryOrRedirect from "./DictionaryOrRedirect";
import DeleteDictionaryButton from "./DeleteDictionaryButton";
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
  breadcrumbs: {
    marginBottom: theme.spacing(1)
  },
  header: {
    marginBottom: theme.spacing(1)
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppHeader />
        <main className={classes.main}>
          <div className={classes.toolbar} />
          <Switch>
            <Route
              path={`/:name`}
              render={({ match }) => (
                <Page
                  header={
                    <>
                      <Breadcrumbs
                        aria-label="breadcrumb"
                        className={classes.breadcrumbs}
                      >
                        <Link component={RouterLink} color="inherit" to="/">
                          Dictionaries
                        </Link>
                        <Typography color="textPrimary">
                          {match.params.name}
                        </Typography>
                      </Breadcrumbs>
                      <Grid
                        container
                        justify="space-between"
                        alignItems="center"
                        className={classes.header}
                      >
                        <PageHeading
                          heading={`${match.params.name} Dictionary`}
                        />
                        <DeleteDictionaryButton name={match.params.name} />
                      </Grid>
                    </>
                  }
                >
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
        </main>
      </div>
    </Router>
  );
}

export default App;
