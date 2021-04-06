import React from "react";
import moment from "moment";

import { CssBaseline } from "@material-ui/core";

moment.locale("pt-br");

import AppRouter from "../routes/AppRouter";

const AppContainer = () => {
  return (
    <>
      <CssBaseline />
      <AppRouter />
    </>
  );
};

export default AppContainer;
