import React from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
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
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import Dictionary from "../models/Dictionary";
import AddDictionaryButton from "./AddDictionaryButton";
import { getDictionaries } from "../selectors";
import { getDictionaryRoute } from "../routes";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2)
  }
}));

function Dictionaries({ dictionaries }) {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1">
            Dictionaries
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {!dictionaries.size && (
              <Typography variant="body1" color="textSecondary" gutterBottom>
                You have no dictionaries yet. Add a dictionary to start editing.
              </Typography>
            )}
            {dictionaries.size > 0 && (
              <List>
                {dictionaries.map(d => (
                  <div key={d.name}>
                    <ListItem
                      button
                      component={Link}
                      to={getDictionaryRoute(d.name)}
                    >
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
            <AddDictionaryButton className={classes.fab} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Dictionaries.propTypes = {
  dictionaries: ImmutablePropTypes.listOf(Dictionary).isRequired
};

export default connect(state => ({
  dictionaries: getDictionaries(state)
}))(Dictionaries);
