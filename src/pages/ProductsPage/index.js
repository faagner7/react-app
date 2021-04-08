import React from "react";
import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { TableBody } from "@material-ui/core";

const Produtos = [
  {
    cod: 111,
    descricao: "Carregador Portátil",
    preço: "R$45,00",
    marca: "Multilaser",
  },
  {
    cod: 232,
    descricao: "Teclado sem fio",
    preço: "R$99,00",
    marca: "Samsung",
  },
  {
    cod: 232,
    descricao: "Fone de Ouvido",
    preço: "R$49,99",
    marca: "JBL",
  },
  {
    cod: 221,
    descricao: "Mousepad",
    preço: "R$19,99",
    marca: "Multilaser",
  },
];

export default function ProductsPage() {
  return (
    <div>
      <h1> Lista de Produtos </h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>COD</TableCell>
            <TableCell>DESCRIÇÃO</TableCell>
            <TableCell>PREÇO</TableCell>
            <TableCell>MARCA</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Produtos.map((produto) => (
            <TableRow key={produto}>
              <TableCell>{produto.cod}</TableCell>
              <TableCell>{produto.descricao}</TableCell>
              <TableCell>{produto.preço}</TableCell>
              <TableCell>{produto.marca}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
