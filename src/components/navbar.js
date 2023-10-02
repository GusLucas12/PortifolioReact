import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import styles from './nav.module.css'
import logo1 from '../images/Logo1.png'
import toggle from '../images/toggle.jpg'
function Navb() {
  return (
    <div className={styles.nav}>
    <Navbar fixed="top" expand="lg" bg="dark"  >
      <Container fluid>
        <Navbar.Brand className={styles.img} href="#home">  <Link to="/"><img src={logo1}></img></Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <img src={toggle}>

            </img>
        </Navbar.Toggle>    
        <Navbar.Collapse id="responsive-navbar-nav"  className='justify-content-end'>
            <div className={styles.texto}>
                
                    <Nav className={styles.navHome}> 
                        <ul className={styles.nav_links}>
                            <li><Link to="/quemSou">Quem Sou</Link></li>
                            <li><Link to="/projetos">Projetos</Link></li>
                            <li><Link to="/clientes">Clientes</Link></li>
                         </ul>
                     </Nav>
          
                    <div className={styles.buton}>
                        <Nav >
                            <div className="btn-contato">
                                 <Link to="/contato">
                                     <button>Contato</button>
                                 </Link>
                
                             </div>
                        </Nav>
                    </div>
                   
           
            </div>
          
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>
    </div>
  );
}

export default Navb;