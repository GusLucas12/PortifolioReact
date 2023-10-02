import mail from "../images/mail.png"
import tel from "../images/tel.png"
import media from "../images/media.png"
import linkedin from '../images/lkd.png'
import instagram from '../images/instagram.png'
import whatsapp from "../images/wpp.png"
import {Link} from 'react-router-dom'
import styles from './contato.module.css'
function Contato(){
    return(
        <div>
            <main>
        <section className={styles.contato}>
            <div className={styles.interface}>
                <div className={styles.flex}>
                    <div className={styles.txt_contato}>
                       <h1>Entre em Contato comigo</h1>
                       
                    </div>
                   
                </div>
            </div> 

        </section> 
        <section className={styles.ende}>
            <div className={styles.interface}>
                <div className={styles.flex}>
                    <div className={styles.baixo}>
                        <img src={mail} alt="" width="64px" height="64px"></img>
                        <h1>Email</h1>
                        <p>Tem alguma Dúvida?</p>
                        <Link to="mailto:gustavosilveira422.gl@gmail.com?subject=Duvidas"> gustavosilveira422.gl@gmail.com</Link>
                     
                    </div>
                    <div className={styles.baixo}>
                        <img src={tel} alt="" width="64px" height="64px"></img>
                        <h1> Telefone </h1>
                        <p>Ligue a qualquer momento</p>
                        <Link to="tel:0800-9999">0800-9999</Link>
                        
                    </div>
                    <div className={styles.baixo}>
                        <img src={media} alt="" width="64px" height="64px"></img>
                        <h1>Redes Sociais</h1>
                        <p>Acesse algum dos links abaixo</p>
                        <Link to="https://www.linkedin.com/in/gustavo-lucas-7b44aa231/">
                        <img
                            src={linkedin} width="32px" height="32px"></img>
                        </Link>
                        <Link to="https://www.instagram.com/gus_lucas12/">
                        <img src={instagram} height="32px"
                                width="32px"></img>
                        </Link>
                        <Link to=""><img src={whatsapp} alt="" width="32px" height="32px"></img></Link>
                        
                    </div>
                </div>
            </div>
            
        </section>
    </main>
        </div>
    )
}

export default Contato;