import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

import Dictionary from "./Dictionary";
import DictionaryModel from "../models/Dictionary";
import { getDictionaryByUrl } from "../selectors";

function DictionaryOrRedirect({ dictionary }) {
  if (!dictionary) {
    return <Redirect to="/" />;
  }
  return <Dictionary name={dictionary.name} data={dictionary.data} />;
}

DictionaryOrRedirect.propTypes = {
  dictionary: PropTypes.instanceOf(DictionaryModel)
};

export default withRouter(
  connect((state, { match }) => ({
    dictionary: getDictionaryByUrl(state, match.params.name)
  }))(DictionaryOrRedirect)
);
