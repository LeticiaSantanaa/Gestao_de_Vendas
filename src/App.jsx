import { BrowserRouter as Router,Switch, Link, Routes,Route } 
from 'react-router-dom';

import Home from '../src/modules/public/pages/home/pages/Home'
import Cabecalho from './modules/public/pages/cabecalho/Cabecalho';


export const App = () => {
    return(
        
        <Router>
       
             <Routes>
             <Route path="/" element={ <Home /> } />
             <Route path="/cabecalho" element={ <Cabecalho /> } />
              
            </Routes> 
         
        </Router>
        
        
        )
    
};
export default App;
