import Cabecalho from "../cabecalho/Cabecalho";
import {} from "../home/pages/Home";
import {} from '../../styles/Reset.css'; 
import MenuLateral from "../menu-lateral/MenuLateral";


export const Relatorio = () => {
    

    return(
      <>
            <Cabecalho/>
            <main className="principal">
              <MenuLateral/>
   
                <h1>Relatorio</h1> 

            </main>
      </>  
    )
    
};
export default Relatorio;