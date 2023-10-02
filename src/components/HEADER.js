import styles from './nav.module.css'
import {Link} from 'react-router-dom'
import logo1 from '../images/Logo1.png'

function HEADER(){
    return(
        <div>
       <header>
        <div className={styles.interface}>
            <div className={styles.img}>
                <Link to="/"><img src={logo1}></img></Link>
                
                
            </div> 

            <nav className={styles.navHome}>
                <ul className={styles.nav_links}>

                    <li><Link to="/quemSou">Quem Sou</Link></li>
                    <li><Link to="/projetos">Projetos</Link></li>
                    <li><Link to="/clientes">Clientes</Link></li>
                    
                </ul>
            </nav>
            <div className="btn-contato">
                <Link to="/contato">
                <button>Contato</button>
                </Link>
                
            </div>

        </div> 


    </header>  
      </div>
    )
}

export default HEADER;