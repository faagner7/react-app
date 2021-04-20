import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default function CovidPage() {
  const [dados, setDados] = useState({});
  useEffect(() => {
    getCovid();
  }, []);

  async function getCovid() {
    const url = "https://covid19-brazil-api.now.sh/api/report/v1/brazil"
    const response = await axios.get(url);
    console.log(response)
    if (response.data.data) {
      setDados(response.data.data)
    }
  }
  return (
    <>
      <h1>Dados Covid Brasil:</h1>
      {dados && (
        <div>
          <h1> Casos Covid </h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>País</TableCell>
                <TableCell>Casos</TableCell>
                <TableCell>Casos Confirmados</TableCell>
                <TableCell>Mortos</TableCell>
                <TableCell>Recuperados</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{dados.country}</TableCell>
                <TableCell>{dados.cases}</TableCell>
                <TableCell>{dados.confirmed}</TableCell>
                <TableCell>{dados.deaths}</TableCell>
                <TableCell>{dados.recovered}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
    </>
  )
}
