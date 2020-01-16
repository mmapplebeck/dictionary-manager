import React from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

import DictionaryListItem from "./DictionaryListItem";
import AddDictionaryButton from "./AddDictionaryButton";
import Dictionary from "../models/Dictionary";
import { getDictionaries } from "../selectors";

function DictionaryList({ dictionaries }) {
  return (
    <>
      {!dictionaries.size && (
        <Typography variant="body1" color="textSecondary" gutterBottom>
          You have no dictionaries. Add a dictionary to start editing.
        </Typography>
      )}
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
      <AddDictionaryButton />
    </>
  );
}

DictionaryList.propTypes = {
  dictionaries: ImmutablePropTypes.listOf(Dictionary).isRequired
};

export default connect(state => ({
  dictionaries: getDictionaries(state)
}))(DictionaryList);
