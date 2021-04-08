import React from "react";
import PropTypes from "prop-types";

const PublicContainer = ({ children }) => {
  return <div>{children}</div>;
};

PublicContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PublicContainer;
