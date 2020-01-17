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
  const isError = item =>
    item && item.error && item.error.level === ErrorLevels.error;

  return {
    chip: props => ({
      color: isError(props.item) ? errorColor : warningColor,
      borderColor: isError(props.item) ? errorColor : warningColor
    }),
    icon: props => ({
      color: isError(props.item) ? errorColor : warningColor
    })
  };
});

function OptionalErrorIcon({ item }) {
  const classes = useStyles({
    item
  });

  if (!item || !item.error) {
    return null;
  }

  return (
    <Chip
      icon={
        item.error.level === ErrorLevels.error ? (
          <ErrorIcon className={classes.icon} />
        ) : (
          <WarningIcon className={classes.icon} />
        )
      }
      label={item.error.name}
      variant="outlined"
      className={classes.chip}
    />
  );
}

OptionalErrorIcon.propTypes = {
  item: PropTypes.object
};

export default OptionalErrorIcon;
