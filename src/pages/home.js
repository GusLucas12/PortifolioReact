import teste from "../images/teste.png"
import styles from "./home.module.css"
function Home(){
    return(
        <div>
              <main>
                <section className={styles.topo}>
                    <div className={styles.interface}>
                        <div className={styles.flex}>
                            <div className={styles.txt_topo_site}>
                                <h1>
                                Olá,sou Gustavo Lucas <span> ! </span>
                                </h1>
                                <p> Estudante de Engenharia da computação, apaixonado por tecnologia e desenvolvedor de
                                 softwares</p>
                                <div class="btn-contato">
                                <a href="#">
                                     <button>Contato</button>
                                </a>
                            </div>
                        </div>
                            <div className={styles.img_topo_site}>
                                <img src={teste}></img>
                             </div>
                         </div>
                    </div> 

                </section> 
            </main>
        </div>
    )
}

export default Home;