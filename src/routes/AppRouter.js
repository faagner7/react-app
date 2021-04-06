import React from "react";
import { Switch, Route, Router } from "react-router-dom";

import history from "../helpers/history";

import PrivateRoute from "./PrivateRoute";

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import CustomersPage from "../pages/CustomersPage";

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path="/" exact title="Home" component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <PrivateRoute
          path="/customers"
          exact
          title="Customers"
          component={CustomersPage}
        />
      </Switch>
    </Router>
  );
};

export default AppRouter;
