import React, { useMemo } from "react";
import PropTypes from "prop-types";
import MaterialTable, { MTableEditField } from "material-table";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ErrorSummary from "./ErrorSummary";
import ErrorChip from "./ErrorChip";
import tableIcons from "../tableIcons";
import DictionaryModel from "../models/Dictionary";
import { getDictionaryByName } from "../selectors";
import {
  addDictionaryItem,
  updateDictionaryItem,
  deleteDictionaryItem
} from "../actions";

const blankFieldError = "Field cannot be blank";

function Dictionary({
  dictionary,
  addDictionaryItem,
  updateDictionaryItem,
  deleteDictionaryItem
}) {
  // Attempting to reduce the expense of converting immutable structures to JS with memoization
  const items = useMemo(() => dictionary.items.toJS(), [dictionary]);

  return (
    <>
      <ErrorSummary name={dictionary.name} />
      <MaterialTable
        options={{
          showTitle: false,
          paging: false,
          search: dictionary.items.size > 0,
          actionsColumnIndex: 2
        }}
        components={{
          Container: props => <div {...props}></div>,
          EditField: props => {
            const { value } = props;
            const shouldShowError = !value;
            return (
              <MTableEditField
                {...props}
                error={shouldShowError}
                helperText={shouldShowError && blankFieldError}
                fullWidth
              />
            );
          }
        }}
        icons={tableIcons}
        columns={[
          { title: "Domain", field: "domain" },
          { title: "Range", field: "range" },
          {
            field: "error",
            editable: "never",
            sorting: false,
            render: item =>
              item && item.error ? (
                <ErrorChip level={item.error.level} label={item.error.name} />
              ) : null
          }
        ]}
        localization={{
          body: {
            emptyDataSourceMessage:
              "You have no dictionary items. Create an item to start populating this dictionary."
          },
          header: {
            actions: ""
          }
        }}
        data={items}
        editable={{
          onRowAdd: ({ domain, range }) =>
            new Promise((resolve, reject) => {
              if (!domain || !range) {
                // Maintain edit mode if there is a blank field
                reject();
              } else {
                addDictionaryItem(dictionary.name, domain, range);
                resolve();
              }
            }),
          onRowUpdate: ({ domain, range }, oldData) =>
            new Promise((resolve, reject) => {
              if (!domain || !range) {
                // Maintain edit mode if there is a blank field
                reject();
              } else {
                const index = items.indexOf(oldData);
                updateDictionaryItem(dictionary.name, index, domain, range);
                resolve();
              }
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              const index = items.indexOf(oldData);
              deleteDictionaryItem(dictionary.name, index);
              resolve();
            })
        }}
      />
    </>
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
      dictionary: getDictionaryByName(state, match.params.name)
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
