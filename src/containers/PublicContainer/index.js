import React from "react";
import PropTypes from "prop-types";

const PublicContainer = (props) => {
  return (
    <>
      <div>PUBLIC NAV</div>
      <div>{props.children}</div>
    </>
  )
};

PublicContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PublicContainer;
