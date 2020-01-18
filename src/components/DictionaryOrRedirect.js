import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

import Dictionary from "./Dictionary";
import DictionaryModel from "../models/Dictionary";
import { getDictionaryByName } from "../selectors";

function DictionaryOrRedirect({ dictionary }) {
  if (!dictionary) {
    return <Redirect to="/" />;
  }
  return <Dictionary />;
}

DictionaryOrRedirect.propTypes = {
  dictionary: PropTypes.instanceOf(DictionaryModel)
};

export default withRouter(
  connect((state, { match }) => ({
    dictionary: getDictionaryByName(state, match.params.name)
  }))(DictionaryOrRedirect)
);
