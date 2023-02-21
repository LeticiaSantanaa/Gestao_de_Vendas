import { initializeApp } from "firebase/app";
import { getFirestore,
   getDocs,
   collection,
   addDoc,
   doc,
   deleteDoc,
  } from "firebase/firestore";
import { useEffect, useState } from "react";

const firebaseApp = initializeApp ({
  apiKey: "AIzaSyChFtHWpfGqZgCAs_Ur2t6Lm_wIpnnOCIQ",
  authDomain: "gestaodevendas-815fc.firebaseapp.com",
  projectId: "gestaodevendas-815fc",
});

export const App = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "users");

  async function criarUser(){
    const user = await addDoc(userCollectionRef, {
      name, 
      email,
    });
    console.log(name);
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  },[]);

  async function deleteUsers(id){
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
  }

  return(
    <div>
      <input 
      type="text" 
      placeholder="Nome..." 
      value={name} 
      onChange={(e) => setName(e.target.value)}
      />
      <input
      type="text" 
      placeholder="email..."
      value={email} 
      onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={criarUser}>Criar User</button>
      <ul>
        {users.map((user) => {
          return(
            <div key={user.id}>
              <li>{user.name}</li>
              <li>{user.email}</li>
              <button onClick={() => deleteUsers(user.id)}>Deletar</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

// export default App;
