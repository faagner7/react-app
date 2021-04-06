import React from "react";
import api from "../../helpers/api";

function CustomersPage() {
  const { url } = api;
  console.log(url);
  return (
    <>
      <h1>CustomersPage</h1>
    </>
  );
}

export default CustomersPage;
