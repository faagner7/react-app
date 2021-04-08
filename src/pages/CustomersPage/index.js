import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const arrayRows = [
  {
    id: 1,
    name: "Andrew",
    cpf: "123.345.135-92",
    address: "Rua Anchieta, 1020",
    country: "Brazil",
  },
  {
    id: 2,
    name: "Julio",
    cpf: "123.345.135-23",
    address: "Rua Padre Chagas, 120",
    country: "Canadá",
  },
  {
    id: 3,
    name: "Lorrane",
    cpf: "123.345.135-21",
    address: "Rua Padre Chagas, 10",
    country: "Canadá",
  },
];

export default function CustomersPage() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID do Cliente</TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">CPF</TableCell>
          <TableCell align="right">Addres</TableCell>
          <TableCell align="right">Country</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {arrayRows.map((item) => (
          <TableRow key={item.name}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.cpf}</TableCell>
            <TableCell>{item.address}</TableCell>
            <TableCell>{item.country}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
