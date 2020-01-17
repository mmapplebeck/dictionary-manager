import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2)
  }
}));

function Page({ header, children }) {
  const classes = useStyles();

  return (
    <>
      {header}
      <Paper className={classes.paper}>{children}</Paper>
    </>
  );
}

Page.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
};

export default Page;
