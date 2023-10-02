import ml from "../images/c2.png"
import lore from "../images/lore.png"
import joao from "../images/joao.png"
import {Link} from 'react-router-dom'
import styles from './clientes.module.css'
function Clientes(){
    return(
    <div>
      <main>
        <section className={styles.clientes}>
            <div className={styles.interface}>

                <h1>Conheça meus Clientes:</h1>
                <div className={styles.c1}>
                    <div className={styles.barra}>
                        <h2>Cliente 1 : <span className={styles.empresa}> ML Móveis </span></h2>
                            <p>ML Móveis. Especializada em móveis planejados, a ML Móveis é uma referência quando se trata de design personalizado e funcionalidade. Com uma trajetória sólida e uma abordagem orientada pelo cliente, a ML Móveis transforma espaços em ambientes sob medida, combinando estética e utilidade de maneira excepcional.</p>
                    </div>
                    <Link to='https://www.instagram.com/mlmoveistimoteo/'><img src={ml}
                            alt=""></img></Link>
                </div>
                <div className={styles.c1}>
                   
                    <Link to=''><img src={lore} alt=""></img></Link>
                    <div className={styles.barra}>
                        <h2>Cliente 2: <span className={styles.empresa}> Brand Loremipsum</span></h2>
                            <p>A Brand Loremipsum é líder em tecnologia, transformando ideias em inovação. Com uma equipe diversificada e apaixonada, criamos soluções que vão além do convencional, abrangendo desde aplicativos a sistemas de IA. Nossas parcerias estratégicas impulsionam o progresso não apenas tecnológico, mas também social.F</p>
                    </div>
                   
                </div>
                <div className={styles.c1}>
                
                    <div className={styles.barra}>
                        <h2>Cliente 3 :  <span className={styles.empresa}>Company Name</span> </h2>
                            <p>Company Name é uma empresa líder e inovadora no campo da consultoria, dedicada a fornecer soluções personalizadas e abrangentes para uma ampla gama de desafios empresariais. Com uma equipe diversificada de especialistas altamente qualificados e uma vasta experiência em diversos setores, estamos comprometidos em ajudar as empresas a atingirem seu máximo potencial e a alcançarem o sucesso sustentável.</p>
                    </div>
                    <Link to=''><img src={joao} alt=""></img></Link> 
                    
                </div>

            </div> 

        </section> 
    </main>    
         
    </div>
    )
}

export default Clientes;