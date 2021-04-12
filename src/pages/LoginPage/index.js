import React from "react";
import { Button, TextField } from '@material-ui/core';
import PublicContainer from "../../containers/PublicContainer";

function LoginPage() {
  return (
    <PublicContainer>
      <h1>login</h1>
      <TextField
        label="E-mail"
      />
      <TextField
        label="Senha"
      />
      <Button variant="contained">Entrar</Button>
    </PublicContainer>
  );
}

export default LoginPage;
