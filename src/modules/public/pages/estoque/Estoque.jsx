import Cabecalho from "../cabecalho/Cabecalho";
import {} from "../home/pages/Home";
import {} from '../../styles/Reset.css'; 
import MenuLateral from "../menu-lateral/MenuLateral";
import SearchIcon from '@mui/icons-material/Search';

export const Estoque = () => {
    

    return(
      <>
            <Cabecalho/>
            <main className="principal">
              <MenuLateral/>
              <div>
                <section className="principal-bloco-pesquisa"> 
                        <div>
                            <label><SearchIcon/></label>
                            <input type="text" placeholder="Pesquisar Produto"/> 
                        </div>
                </section>  
                <h1>Estoque</h1> 
              </div>

            </main>
      </>  
    )
    
};
export default Estoque;