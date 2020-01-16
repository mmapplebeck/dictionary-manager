import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2)
  }
}));

function Page({ heading, children }) {
  const classes = useStyles();
  const { name } = useParams();

  return (
    <Grid container spacing={3}>
      {name && (
        <Grid item xs={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link component={RouterLink} color="inherit" to="/">
              Dictionaries
            </Link>
            <Typography color="textPrimary">{name}</Typography>
          </Breadcrumbs>
        </Grid>
      )}
      <Grid item xs={12}>
        <Typography variant="h4" component="h1">
          {heading}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>{children}</Paper>
      </Grid>
    </Grid>
  );
}

Page.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Page;
