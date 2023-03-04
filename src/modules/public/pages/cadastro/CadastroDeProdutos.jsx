import { initializeApp } from "firebase/app";
import { getFirestore,
   getDocs,
   collection,
   addDoc,
   doc,
   deleteDoc,
  } from "firebase/firestore";
import { useEffect, useState } from "react";
import {} from "../../styles/CadastroDeProdutos.css";
import {} from "../../styles/EstiloGlobal.css";
import Cabecalho from "../cabecalho/Cabecalho";
import MenuLateral from "../menu-lateral/MenuLateral";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const firebaseApp = initializeApp ({
  apiKey: "AIzaSyChFtHWpfGqZgCAs_Ur2t6Lm_wIpnnOCIQ",
  authDomain: "gestaodevendas-815fc.firebaseapp.com",
  projectId: "gestaodevendas-815fc",
});

export const CadastroDeProdutos = () => {

  const [nome, setNome] = useState("");
  const [codigo, setCodigo] = useState("");
  const [quantidade, setQuantidade] = useState([]);
  const [setListaDeProdutos] = useState([]);
  const [valor, setValor] = useState([]);


  const db = getFirestore(firebaseApp);
  const produtoCollectionRef = collection(db, "listaDeProdutos");

  async function cadastrarProduto(){
    const produto = await addDoc(produtoCollectionRef, {
      nome, 
      codigo,
      quantidade,
      valor,
    });

  }

  useEffect(() => {
    const getProduto = async () => {
      const data = await getDocs(produtoCollectionRef);
      setListaDeProdutos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProduto();
  },[]);

  // async function deleteProduto(id){
  //   const produtoDoc = doc(db, 'produto', id);
  //   await deleteDoc(produtoDoc);
  // }

  return(
    <div> 
          <Cabecalho/>
          
          <main className="principal">
          <MenuLateral/>
          <section className="principal-secao-de-cadastro">
            <fieldset className="principal__container-cadastro">
              <h1>Cadastrar Produto</h1>

                <TextField 
                label="Nome" 
                variant="standard"
                className="principal__inputs-cadastro"
                type="text" 
                value={nome} 
                onChange={(e) => setNome(e.target.value)} 
                required
                />

                <TextField 
                label="Código" 
                variant="standard"
                className="principal__inputs-cadastro"
                type="text" 
                value={codigo} 
                onChange={(e) => setCodigo(e.target.value)}
                required
              />
              
              <TextField 
                required
                label="Quantidade" 
                variant="standard" 
                type="number"
                value={quantidade}       
                onChange={(e) => setQuantidade(e.target.value)}        
                className="principal__inputs-cadastro"
              />
              <TextField 
              required
              label="Preço" 
              variant="standard" 
              className="principal__inputs-cadastro"
              type="number" 
              value={valor} 
              onChange={(e) => setValor(e.target.value)}
              
              />


                <Button             
                  className="principal__botao-cadastrar"
                  type="submit"
                  variant="contained" 
                  onClick={cadastrarProduto}
                >
                    Cadastrar
                </Button>
{/*   
                <ul>
                  {produto.map((produto) => {
                    return(
                      
                      <div key={produto.id}>
                        <li>{produto.nome}</li>
                        <li>{produto.codigo}</li>
                        <li>{produto.quantidade}</li>
                        <li>{produto.valor}</li>
                        <button onClick={() => deleteProduto(produto.id)}>Deletar</button>
                      </div>
                    );
                  })}
                </ul>  */}
            </fieldset>
          </section>
          
         
      </main>
    </div>
  );
};
 export default CadastroDeProdutos;
