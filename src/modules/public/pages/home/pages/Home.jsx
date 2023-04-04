import Cabecalho from "../../cabecalho/Cabecalho";
import {} from "../../../styles/Home.css";
import {} from '../../../styles/Reset.css'; 
import MenuLateral from "../../menu-lateral/MenuLateral";
import SearchIcon from '@mui/icons-material/Search';

import { initializeApp } from "firebase/app";
import { getFirestore,
   getDocs,
   collection,
   addDoc,
   doc,
   deleteDoc,

  } from "firebase/firestore";
import { useEffect, useState } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from "@mui/material";


const firebaseApp = initializeApp ({
  apiKey: "AIzaSyChFtHWpfGqZgCAs_Ur2t6Lm_wIpnnOCIQ",
  authDomain: "gestaodevendas-815fc.firebaseapp.com",
  projectId: "gestaodevendas-815fc",
});


export const Home = () => {
    const [listaDeProdutos, setListaDeProdutos] = useState([]);
    const [busca, setBusca] = useState("");
    const buscaDeLetrasMinusculas = busca.toLowerCase();
    

    const lista = listaDeProdutos.filter(
     ( produto) => 
     produto.nome.toLowerCase().includes(buscaDeLetrasMinusculas) 
     || 
     produto.codigo.includes(busca)
     );

    const db = getFirestore(firebaseApp);
    const produtoCollectionRef = collection(db, "listaDeProdutos");
  
    useEffect(() => {
        const getProduto = async () => {
          const data = await getDocs(produtoCollectionRef);
          setListaDeProdutos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getProduto();
      },[]);

      //testanto
      //   async function deleteProduto(id){
      //   const produtoDoc = doc(db, 'listaDeProdutos', id);
      //   await deleteDoc(produtoDoc);
      // } 

      // var nome = ['Leticia', 'Beatriz', 'Ana']
      // const listaOrdenada = nome.sort(Intl.Collator().compare)
      async function selecionarProduto(id){
        const selecionarProdutoDoc = doc(db, 'listaDeProdutos', id);
        await addDoc(selecionarProdutoDoc);
      }

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
                                type="search" 
                                placeholder="Pesquisar Produto" 
                                value={busca}
                                onChange={(e) => setBusca(e.target.value)}
                                /> 
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
                                    <TableCell align="left">Código</TableCell>
                                    <TableCell align="left">Nome </TableCell>
                                    <TableCell align="left">Estoque</TableCell>
                                    <TableCell align="left">Valor</TableCell>
                                    <TableCell align="center">Selecionar</TableCell>

                              </TableRow>
                            </TableHead>
                              <TableBody>
                                    {lista.map((produto) => (
                              <TableRow
                                key={produto.id}
                               >

                                <TableCell component="th" scope="row">{produto.codigo}</TableCell>
                                <TableCell align="left" >{produto.nome}</TableCell>
                                <TableCell align="left">{produto.quantidade}</TableCell>
                                <TableCell align="left">{produto.valor}</TableCell>
                                <TableCell align="center">
                                  <input type="Checkbox" onClick={() => selecionarProduto(produto.id)}/>
                                  </TableCell>
                                  {/* <TableCell align="center">
                                    <button onClick={() => deleteProduto(produto.id)}>Deletar</button>
                                  </TableCell> */}

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