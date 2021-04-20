import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import history from "../helpers/history";

import PrivateRoute from "./PrivateRoute";

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import CustomersPage from "../pages/CustomersPage";
import ProductsPage from "../pages/ProductsPage";
import CovidPage from "../pages/CovidPage"

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute path="/" exact title="Home" component={HomePage} />
        <PrivateRoute
          path="/customers"
          exact
          title="Customers"
          component={CustomersPage}
        />
        <PrivateRoute
          path="/products"
          exact
          title="Produtos"
          component={ProductsPage}
        />
        <PrivateRoute
          path="/covid"
          exact
          title="Dados Covid"
          component={CovidPage}

        />


      </Switch>
    </Router>
  );
};

export default AppRouter;

// para conseguirmos CRIAR rotas temos que usar o ROUTER E SWITCH
// temos dois tipos de DeviceRotationRate, public and private
// path é o caminho
// exact só irá renderizar se o caminho for exatamente igual
