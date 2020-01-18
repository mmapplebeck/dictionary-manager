import React from "react";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import ErrorIcon from "@material-ui/icons/Error";
import WarningIcon from "@material-ui/icons/Warning";
import { makeStyles } from "@material-ui/core/styles";

import { ErrorLevels } from "../models/Errors";

const useStyles = makeStyles(theme => {
  const errorColor = theme.palette.error.dark;
  const warningColor = theme.palette.warning.dark;
  const isErrorLevel = level => level === ErrorLevels.error;

  return {
    chip: props => ({
      color: isErrorLevel(props.level) ? errorColor : warningColor,
      borderColor: isErrorLevel(props.level) ? errorColor : warningColor
    }),
    icon: props => ({
      color: isErrorLevel(props.level) ? errorColor : warningColor
    })
  };
});

function ErrorChip({ level, label, className }) {
  const classes = useStyles({
    level
  });

  return (
    <Chip
      icon={
        level === ErrorLevels.error ? (
          <ErrorIcon className={classes.icon} />
        ) : (
          <WarningIcon className={classes.icon} />
        )
      }
      label={label}
      variant="outlined"
      className={`${className} ${classes.chip}`}
    />
  );
}

ErrorChip.propTypes = {
  level: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default ErrorChip;
