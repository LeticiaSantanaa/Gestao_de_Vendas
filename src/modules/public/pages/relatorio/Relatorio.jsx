import Cabecalho from "../cabecalho/Cabecalho";
import {} from "../home/pages/Home";
import {} from '../../styles/Reset.css'; 
import {} from "../../styles/Relatorio.css"
import MenuLateral from "../menu-lateral/MenuLateral";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(mes, entradas) {
  return { mes, entradas};
}

const rows = [
  createData('Janeiro', 159,),
  createData('Fevereiro', 237,),
  createData('Março', 262, ),
  createData('Abril', 305,),
  createData('Maio', 356,),
  createData('Junho', 356, ),
  createData('Julho', 356, ),
  createData('Agosto', 356,),
  createData('Setembro', 353.9),
  createData('Outubro', 356.9),
  createData('Novembro', 353.9),
  createData('Dezembro', 353.9),


];

export const Relatorio = () => {
    

    return(
      <>
            <Cabecalho/>
            <main className="principal">
              <MenuLateral/>

            <div id="bloco-tabela-relatorio">
              <TableContainer component={Paper} id="tabela-relatorio" >
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell> Entrada</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.mes}>
                          <TableCell >{row.mes}</TableCell>
                          <TableCell >{row.entradas}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
            </div>

              

            </main>
      </>  
    )
    
};
export default Relatorio;