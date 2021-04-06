import React from "react";
import PropTypes from "prop-types";

const DashboardContainer = ({ children, title }) => {
  document.title = `${title} - Sistema`;
  return (
    <>
      <h1> menu- ROLA</h1>
      <main>{children}</main>
    </>
  );
};

DashboardContainer.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
};

DashboardContainer.defaultProps = {
  children: <></>,
  title: "",
};

export default DashboardContainer;
