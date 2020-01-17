import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

import DeleteDictionaryButton from "./DeleteDictionaryButton";
import PageHeading from "./PageHeading";

const useStyles = makeStyles(theme => ({
  breadcrumbs: {
    marginBottom: theme.spacing(1)
  },
  header: {
    marginBottom: theme.spacing(1)
  }
}));

function DictionaryHeader({ name }) {
  const classes = useStyles();

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
        <Link component={RouterLink} color="inherit" to="/">
          Dictionaries
        </Link>
        <Typography color="textPrimary">{name}</Typography>
      </Breadcrumbs>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        className={classes.header}
      >
        <PageHeading heading={`${name} Dictionary`} />
        <DeleteDictionaryButton name={name} />
      </Grid>
    </>
  );
}

DictionaryHeader.propTypes = {
  name: PropTypes.string.isRequired
};

export default DictionaryHeader;
