import React from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DictionaryIcon from "@material-ui/icons/Description";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

import Dictionary from "../models/Dictionary";
import AddDictionaryButton from "./AddDictionaryButton";
import { getDictionaries } from "../selectors";
import { getDictionaryRoute } from "../routes";

function Dictionaries({ dictionaries }) {
  return (
    <>
      {!dictionaries.size && (
        <Typography variant="body1" color="textSecondary" gutterBottom>
          You have no dictionaries yet. Add a dictionary to start editing.
        </Typography>
      )}
      {dictionaries.size > 0 && (
        <List>
          {dictionaries.map(d => (
            <div key={d.name}>
              <ListItem button component={Link} to={getDictionaryRoute(d.name)}>
                <ListItemAvatar>
                  <Avatar>
                    <DictionaryIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={d.name} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      )}
      <AddDictionaryButton />
    </>
  );
}

Dictionaries.propTypes = {
  dictionaries: ImmutablePropTypes.listOf(Dictionary).isRequired
};

export default connect(state => ({
  dictionaries: getDictionaries(state)
}))(Dictionaries);
