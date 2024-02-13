import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import Empresa from '../pages/Empresa';
import Contato from '../pages/Contato';
function Rotas(){
    return(
        <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contato" element={<Contato />} />
                  <Route path="/empresa" element={<Empresa />} />
        </Routes>
    )
}
export default Rotas