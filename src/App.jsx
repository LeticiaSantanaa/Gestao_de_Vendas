import { BrowserRouter as Router,Switch, Link, Routes,Route } 
from 'react-router-dom';

import Home from '../src/modules/public/pages/home/pages/Home'
import Cabecalho from './modules/public/pages/cabecalho/Cabecalho';
import CadastroDeProdutos from './modules/public/pages/cadastro/CadastroDeProdutos';

export const App = () => {
    return(
        
        <Router>
       
             <Routes>
             <Route path="/" element={ <Home /> } />
             <Route path="/cabecalho" element={ <Cabecalho /> } />
             <Route path="/cadastroDeProdutos" element={ <CadastroDeProdutos /> } />
              
            </Routes> 
         
        </Router>
        
        
        )
    
};
export default App;
