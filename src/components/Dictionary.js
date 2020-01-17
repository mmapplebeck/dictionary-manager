import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Fab from "@material-ui/core/Fab";
import Chip from "@material-ui/core/Chip";
import AddIcon from "@material-ui/icons/Add";
import ErrorIcon from "@material-ui/icons/Error";
import WarningIcon from "@material-ui/icons/Warning";
import MaterialTable, { MTableEditField } from "material-table";
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

class Error {
  constructor(name, severity) {
    this.name = name;
    this.level = severity;
  }
}

const ErrorLevels = {
  error: "error",
  warning: "warning"
};

const validateItem = (item, domains, rangesByDomain) => {
  // Check for errors in order of my percieved severity
  let error = "";
  // If this item's range is also an existing domain, it must be either a cycle or a chain
  if (domains.has(item.range)) {
    // If a domain exists that maps to this item's domain, there is a cycle, otherwise it must be a chain
    if (rangesByDomain[item.range].includes(item.domain)) {
      error = new Error("Cycle", ErrorLevels.error);
    } else {
      error = new Error("Chain", ErrorLevels.warning);
    }
    // If multiple range values are mapped to this item's domain value, it must be either a fork or a duplicate
  } else if (rangesByDomain[item.domain].length > 1) {
    // If all mapped ranges are unique, there is a fork, otherwise there must be a duplicate
    if (new Set(rangesByDomain[item.domain]).size > 1) {
      error = new Error("Fork", ErrorLevels.warning);
    } else {
      error = new Error("Duplicate", ErrorLevels.warning);
    }
  }
  return error;
};

const addErrors = items => {
  // Get a set of all domains
  const domains = new Set(items.map(item => item.domain));
  // Group ranges by their domain
  const rangesByDomain = items.reduce((acc, item) => {
    if (!acc[item.domain]) {
      acc[item.domain] = [];
    }
    acc[item.domain].push(item.range);
    return acc;
  }, {});

  // Augment every item with any errors
  return items.map(item => ({
    ...item,
    error: validateItem(item, domains, rangesByDomain)
  }));
};

function OptionalErrorIcon({ item }) {
  if (!item || !item.error) {
    return null;
  }

  return (
    <Chip
      icon={
        item.error.level === ErrorLevels.error ? <ErrorIcon /> : <WarningIcon />
      }
      label={item.error.name}
      variant="outlined"
    />
  );
}

OptionalErrorIcon.propTypes = {
  item: PropTypes.object.isRequired
};

const blankFieldError = "Field cannot be blank";

function Dictionary({
  dictionary,
  addDictionaryItem,
  updateDictionaryItem,
  deleteDictionaryItem
}) {
  // Tried to reduce the expense of converting to JS and calculating errors
  const itemsAsArrayWithErrors = useMemo(
    () => addErrors(dictionary.items.toJS()),
    [dictionary]
  );

  return (
    <>
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
          ),
          EditField: props => {
            const { value } = props;
            const shouldShowError = !value;
            return (
              <MTableEditField
                {...props}
                error={shouldShowError}
                helperText={shouldShowError && blankFieldError}
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
            render: item => <OptionalErrorIcon item={item} />
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
        data={itemsAsArrayWithErrors}
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
                const index = itemsAsArrayWithErrors.indexOf(oldData);
                updateDictionaryItem(dictionary.name, index, domain, range);
                resolve();
              }
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              const index = itemsAsArrayWithErrors.indexOf(oldData);
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
