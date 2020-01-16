import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import tableIcons from "../tableIcons";
import DictionaryModel from "../models/Dictionary";
import { getDictionaryByUrl } from "../selectors";
import {
  addDictionaryItem,
  updateDictionaryItem,
  deleteDictionaryItem
} from "../actions";

function Dictionary({
  dictionary,
  addDictionaryItem,
  updateDictionaryItem,
  deleteDictionaryItem
}) {
  const itemsAsArray = useMemo(() => dictionary.items.toJS(), [dictionary]);

  return (
    <MaterialTable
      options={{
        showTitle: false,
        paging: false,
        search: dictionary.items.size > 0,
        actionsColumnIndex: 2
      }}
      components={{
        Container: props => <div {...props}></div>,
        Add: props => (
          <Fab color="primary" {...props}>
            <AddIcon />
          </Fab>
        )
      }}
      icons={tableIcons}
      columns={[
        { title: "Domain", field: "domain" },
        { title: "Range", field: "range" }
      ]}
      localization={{
        body: {
          emptyDataSourceMessage:
            "You have no dictionary items. Create an item to start populating this dictionary."
        }
      }}
      data={itemsAsArray}
      editable={{
        onRowAdd: ({ domain, range }) =>
          new Promise((resolve, reject) => {
            addDictionaryItem(dictionary.name, domain, range);
            resolve();
          }),
        onRowUpdate: ({ domain, range }, oldData) =>
          new Promise((resolve, reject) => {
            const index = itemsAsArray.indexOf(oldData);
            updateDictionaryItem(dictionary.name, index, domain, range);
            resolve();
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            const index = itemsAsArray.indexOf(oldData);
            deleteDictionaryItem(dictionary.name, index);
            resolve();
          })
      }}
    />
  );
}

Dictionary.propTypes = {
  dictionary: PropTypes.instanceOf(DictionaryModel).isRequired,
  addDictionaryItem: PropTypes.func.isRequired,
  updateDictionaryItem: PropTypes.func.isRequired,
  deleteDictionaryItem: PropTypes.func.isRequired
};

export default withRouter(
  connect(
    (state, { match }) => ({
      dictionary: getDictionaryByUrl(state, match.params.name)
    }),
    dispatch => ({
      addDictionaryItem: (name, domain, range) =>
        dispatch(addDictionaryItem(name, domain, range)),
      updateDictionaryItem: (name, index, domain, range) =>
        dispatch(updateDictionaryItem(name, index, domain, range)),
      deleteDictionaryItem: (name, index) =>
        dispatch(deleteDictionaryItem(name, index))
    })
  )(Dictionary)
);
