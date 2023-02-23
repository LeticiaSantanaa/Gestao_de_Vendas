import {} from '../../styles/Cabecalho.css';
import {} from '../../styles/EstiloGlobal.css';
import {} from '../../styles/Reset.css' ;
import DehazeIcon from '@mui/icons-material/Dehaze';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export const Cabecalho = () => {
    return( 
            <header className="cabecalho">
                <button className='cabecalho__botao'><DehazeIcon/></button>
                <h1>Gestão de Vendas</h1>
                <AutoAwesomeIcon/>
            </header>
       
       
        )
    
};
export default Cabecalho;