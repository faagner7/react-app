import React from "react";
import { Switch, Route, Router } from "react-router-dom";

import history from "../helpers/history";

import PrivateRoute from "./PrivateRoute";

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path="/" exact title="Home" component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
