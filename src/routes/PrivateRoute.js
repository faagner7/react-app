/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import DashboardContainer from "../containers/DashboardContainer";

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, title, ...rest }) => {
  const loggedIn = true;

  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? (
          <DashboardContainer title={title}>
            <Component {...props} />
          </DashboardContainer>
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
