/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import PrivateContainer from "../containers/PrivateContainer";

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, title, ...rest }) => {
  const loggedIn = true;

  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? (
          <PrivateContainer title={title}>
            <Component {...props} />
          </PrivateContainer>
        ) : (
          <Redirect
            to={{
              pathname: "login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]).isRequired,
  title: PropTypes.string,
};

PrivateRoute.defaultProps = {
  title: "",
};

export default PrivateRoute;
