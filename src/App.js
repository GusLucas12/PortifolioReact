import logo from './logo.svg';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Contato from './pages/contato';
import Clientes from './pages/clientes';
import Projetos from './pages/projetos';
import QuemSou from './pages/quemSou';
import HEADER from './components/HEADER';
import Footer from './components/Footer';
import Navb from './components/navbar';

function App() {
  return (
    <div className="App" >
     <header id="header">
      <Navb/>
     </header>
    
        <Routes>
      
          <Route path="/" element={<Home/>} />
          <Route path="/quemSou" element={<QuemSou />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/clientes" element={<Clientes/>}/>
          <Route path='/contato' element={<Contato/>}/>
        </Routes>
      
      
      <Footer/>
    
    </div>
  );
}

export default App;
