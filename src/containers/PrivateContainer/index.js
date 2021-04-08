import React from "react";
import PropTypes from "prop-types";

const PrivateContainer = ({ children, title }) => {
  document.title = `${title} - Sistema`;
  return (
    <>
      <h1>NAV BAR PRIVATE CONTAINER</h1>
      <main>{children}</main>
    </>
  );
};

PrivateContainer.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
};

PrivateContainer.defaultProps = {
  children: <></>,
  title: "",
};

export default PrivateContainer;
