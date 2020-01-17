import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import DictionaryIcon from "@material-ui/icons/Description";
import { Link } from "react-router-dom";

import DeleteDictionaryButton from "./DeleteDictionaryButton";
import { getDictionaryRoute } from "../routes";

function DictionaryListItem({ name, deleteDictionary }) {
  return (
    <ListItem button component={Link} to={getDictionaryRoute(name)}>
      <ListItemAvatar>
        <Avatar>
          <DictionaryIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} />
      <ListItemSecondaryAction>
        <DeleteDictionaryButton name={name} />
      </ListItemSecondaryAction>
    </ListItem>
  );
}

DictionaryListItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default DictionaryListItem;
