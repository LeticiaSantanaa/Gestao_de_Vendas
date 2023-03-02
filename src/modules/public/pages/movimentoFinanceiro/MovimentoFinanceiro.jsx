import Cabecalho from "../cabecalho/Cabecalho";
import {} from "../home/pages/Home";
import {} from '../../styles/Reset.css'; 
import MenuLateral from "../menu-lateral/MenuLateral";


export const MovimentoFinanceiro = () => {
    

    return(
      <>
            <Cabecalho/>
            <main className="principal">
              <MenuLateral/>
   
                <h1>Movimento Financeiro</h1> 

            </main>
      </>  
    )
    
};
export default MovimentoFinanceiro;