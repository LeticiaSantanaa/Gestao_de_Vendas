      import Cabecalho from "../../cabecalho/Cabecalho";
import {} from "../../../styles/Home.css";
import {} from '../../../styles/Reset.css'; 
import MenuLateral from "../../menu-lateral/MenuLateral";
import SearchIcon from '@mui/icons-material/Search';

import { initializeApp } from "firebase/app";
import { getFirestore,
   getDocs,
   collection,

  } from "firebase/firestore";
import { useEffect, useState } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const firebaseApp = initializeApp ({
  apiKey: "AIzaSyChFtHWpfGqZgCAs_Ur2t6Lm_wIpnnOCIQ",
  authDomain: "gestaodevendas-815fc.firebaseapp.com",
  projectId: "gestaodevendas-815fc",
});


export const Home = () => {
    const [listaDeProdutos, setListaDeProdutos] = useState([]);
    const [busca, setBusca] = useState("");

    
    const db = getFirestore(firebaseApp);
    const userCollectionRef = collection(db, "listaDeProdutos");
  
    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(userCollectionRef);
          setListaDeProdutos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
      },[]);

      // const produtosFiltrados = listaDeProdutos.filter((user) => user.startsWith(busca));

    return(
      <>
            <Cabecalho/>
            <main className="principal">
              <MenuLateral/>
              <div>
                <section className="principal-bloco-pesquisa"> 
                        <div>
                            <label><SearchIcon/></label>
                            <input 
                                type="text" 
                                placeholder="Pesquisar Produto" 
                                value={busca}
                                onChange={(e) => setBusca(e.target.value)}/> 
                        </div>
                </section>   
                <TableContainer 
                    component={Paper} 
                    style={{minHeight:350, marginTop:"3%", width:750}}
                    >
                          <Table 
                          sx={{ width: 750 }} 
                          aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow >
                                <TableCell 
                                align="left">Código</TableCell>
                                <TableCell align="left">Nome </TableCell>
                                <TableCell align="left">Estoque</TableCell>
                                <TableCell align="left">Valor</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                                {listaDeProdutos.map((user) => (
                            <TableRow
                             key={user.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">{user.codigo}</TableCell>
                            <TableCell align="left" >{user.nome}</TableCell>
                            <TableCell align="left">{user.quantidade}</TableCell>
                            <TableCell align="left">{user.valor}</TableCell>
                            

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
export default Home;