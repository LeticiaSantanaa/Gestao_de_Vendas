import Cabecalho from "../../cabecalho/Cabecalho";
import {} from "../../../styles/Home.css";
import {} from '../../../styles/Reset.css'; 
import MenuLateral from "../../menu-lateral/MenuLateral";

export const Home = () => {
    return(
        <>
            <Cabecalho/>
            <main className="principal">
            <MenuLateral/>
        
                <ul className="principal-links">
                    <li>Balcão de Vendas</li>
                    <li>Movimento Financeiro</li>
                    <li>Cadastro de Produtos</li>
                    <li>Estoque</li>
                    <li>Relatórios</li>
                    <li>Perfil</li>
                    
                </ul>
            </main>
        </>
        
    )
    
};
export default Home;
