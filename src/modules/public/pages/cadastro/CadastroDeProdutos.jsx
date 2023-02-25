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

  const [name, setName] = useState("");
  const [codigo, setCodigo] = useState("");
  const [quantidade, setQuantidade] = useState([]);
  const [produto, setProduto] = useState([]);


  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "produto");

  async function criarUser(){
    const user = await addDoc(userCollectionRef, {
      name, 
      codigo,
    });
    console.log(name);
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setProduto(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  },[]);

  async function deleteUsers(id){
    const userDoc = doc(db, 'produto', id);
    await deleteDoc(userDoc);
  }

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
                value={name} 
                onChange={(e) => setName(e.target.value)} />

                <TextField 
                label="Código" 
                variant="standard"
                className="principal__inputs-cadastro"
                type="text" 
                value={codigo} 
                onChange={(e) => setCodigo(e.target.value)}
              />
              
              <TextField 
              label="Quantidade" 
              variant="standard"               
              className="principal__inputs-cadastro"
  />
              <TextField label="Preço" variant="standard"               className="principal__inputs-cadastro"
  />


                <Button             
                  className="principal__botao-cadastrar"
                  variant="contained" 
                  onClick={criarUser}
                >
                    Cadastrar
                </Button>
  {/* 
                <ul>
                  {produto.map((user) => {
                    return(
                      
                      <div key={user.id}>
                        <li>{user.name}</li>
                        <li>{user.codigo}</li>
                        <button onClick={() => deleteUsers(user.id)}>Deletar</button>
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
