import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DictionaryIcon from "@material-ui/icons/Description";
import DeleteIcon from "@material-ui/icons/DeleteOutline";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { deleteDictionary } from "../actions";
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
        <IconButton edge="end" aria-label="delete" onClick={deleteDictionary}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

DictionaryListItem.propTypes = {
  name: PropTypes.string.isRequired,
  deleteDictionary: PropTypes.func.isRequired
};

export default connect(null, (dispatch, { name }) => ({
  deleteDictionary: () => dispatch(deleteDictionary(name))
}))(DictionaryListItem);
