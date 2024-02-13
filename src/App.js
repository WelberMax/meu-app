import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Rotas from './components/Rotas';




function App() { 
  
 
  return (
    <Router>
        <Navbar/>
        <Rotas/>
        <Footer/>
    </Router>
    
    
  );
}

export default App;
 