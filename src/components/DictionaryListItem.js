import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import DictionaryIcon from "@material-ui/icons/Description";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import DeleteDictionaryButton from "./DeleteDictionaryButton";
import { getDictionaryRoute } from "../routes";
import ErrorSummary from "./ErrorSummary";

const useStyles = makeStyles(theme => ({
  secondaryAction: {
    display: "flex",
    alignItems: "center"
  },
  delete: {
    marginLeft: theme.spacing(1)
  }
}));

function DictionaryListItem({ name, deleteDictionary }) {
  const classes = useStyles();

  return (
    <ListItem button component={Link} to={getDictionaryRoute(name)}>
      <ListItemAvatar>
        <Avatar>
          <DictionaryIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} />
      <ListItemSecondaryAction className={classes.secondaryAction}>
        <ErrorSummary name={name} />
        <DeleteDictionaryButton name={name} className={classes.delete} />
      </ListItemSecondaryAction>
    </ListItem>
  );
}

DictionaryListItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default DictionaryListItem;
