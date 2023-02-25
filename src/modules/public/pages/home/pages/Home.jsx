import Cabecalho from "../../cabecalho/Cabecalho";
import {} from "../../../styles/Home.css";
import {} from '../../../styles/Reset.css'; 
import MenuLateral from "../../menu-lateral/MenuLateral";
import SearchIcon from '@mui/icons-material/Search';

export const Home = () => {
    return(
        <>
            <Cabecalho/>
            <main className="principal">
            <MenuLateral/>
            <section className="principal-bloco-pesquisa">
            
                    <label><SearchIcon/></label>
                    <input type="text" placeholder="Pesquisar Produto"/>
                
            </section>
            </main>
        </>
        
    )
    
};
export default Home;
