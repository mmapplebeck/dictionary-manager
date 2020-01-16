import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link as RouterLink } from "react-router-dom";

function Dictionary({ name, data }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link component={RouterLink} color="inherit" to="/">
            Dictionaries
          </Link>
          <Typography color="textPrimary">{name}</Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1">
          {name} Dictionary
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper></Paper>
      </Grid>
    </Grid>
  );
}

export default Dictionary;
