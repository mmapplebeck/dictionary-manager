import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import ErrorChip from "./ErrorChip";
import { ErrorLevels } from "../models/Errors";
import { getErrorCount, getWarningCount } from "../selectors";

const handlePlural = (base, count) => `${base}${count > 1 ? "s" : ""}`;

const useStyles = makeStyles(theme => ({
  warning: {
    marginLeft: theme.spacing(1)
  }
}));

function ErrorSummary({ name, errorCount, warningCount }) {
  const classes = useStyles();

  if (errorCount === 0 && warningCount === 0) {
    return null;
  }

  return (
    <Grid container>
      {errorCount > 0 && (
        <ErrorChip
          level={ErrorLevels.error}
          label={`${errorCount} ${handlePlural("Error", errorCount)}`}
        />
      )}
      {warningCount > 0 && (
        <ErrorChip
          className={errorCount > 0 ? classes.warning : ""}
          level={ErrorLevels.warning}
          label={`${warningCount} ${handlePlural("Warning", warningCount)}`}
        />
      )}
    </Grid>
  );
}

ErrorSummary.propTypes = {
  name: PropTypes.string.isRequired,
  errorCount: PropTypes.number.isRequired,
  warningCount: PropTypes.number.isRequired
};

export default withRouter(
  connect((state, { name }) => ({
    errorCount: getErrorCount(state, name),
    warningCount: getWarningCount(state, name)
  }))(ErrorSummary)
);
