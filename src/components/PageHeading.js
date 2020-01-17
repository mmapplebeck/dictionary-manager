import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

function PageHeading({ heading }) {
  return (
    <Typography variant="h4" component="h1">
      {heading}
    </Typography>
  );
}

PageHeading.propTypes = {
  heading: PropTypes.string.isRequired
};

export default PageHeading;
