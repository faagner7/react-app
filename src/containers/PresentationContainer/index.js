import React from "react";
import PropTypes from "prop-types";

const PresentationContainer = ({ children }) => {
  return <div>{children}</div>;
};

PresentationContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PresentationContainer;
