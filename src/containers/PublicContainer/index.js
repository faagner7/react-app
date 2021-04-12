import React from "react";
import PropTypes from "prop-types";
import "./index.public.css";

const PublicContainer = ({ children }) => {
  return(
   <>
   <nav>
      <ul>
      <li>BISTECA SISTEMAS</li>
        </ul>
</nav>

      <div>{children}</div>

   </>
  )};

PublicContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PublicContainer;
