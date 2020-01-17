import React from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import DictionaryListItem from "./DictionaryListItem";
import AddDictionaryButton from "./AddDictionaryButton";
import Dictionary from "../models/Dictionary";
import { getDictionaries } from "../selectors";

const useStyles = makeStyles(theme => ({
  emptyTextDivider: {
    marginTop: theme.spacing(1)
  },
  emptyText: {
    paddingTop: theme.spacing(2)
  }
}));

function DictionaryList({ dictionaries }) {
  const classes = useStyles();

  return (
    <>
      <Grid container justify="flex-end">
        <AddDictionaryButton />
      </Grid>
      {dictionaries.size > 0 && (
        <List>
          {dictionaries.map(d => (
            <div key={d.name}>
              <DictionaryListItem name={d.name} />
              <Divider />
            </div>
          ))}
        </List>
      )}

      {!dictionaries.size && (
        <>
          <Divider className={classes.emptyTextDivider} />
          <Grid container justify="center">
            <Typography variant="body" className={classes.emptyText}>
              You have no dictionaries. Add a dictionary to start editing.
            </Typography>
          </Grid>
        </>
      )}
    </>
  );
}

DictionaryList.propTypes = {
  dictionaries: ImmutablePropTypes.listOf(Dictionary).isRequired
};

export default connect(state => ({
  dictionaries: getDictionaries(state)
}))(DictionaryList);
