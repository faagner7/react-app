import React, { useEffect } from "react";

//COMPONENTE
const CustomersPage = () => {
  //FUNCAO PEGAR DADOS API
  const getCustomersRequest = () => {
    // AQUI VAI A REQUEST.
    console.log("disparou a função!");
  };

  //AO MONTAR PÁGINA
  useEffect(() => {
    getCustomersRequest();
  }, []);

  return (
    <div>
      <p>CustomersPage</p>
    </div>
  );
};

export default CustomersPage;
