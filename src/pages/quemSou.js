import sim from "../images/sim.jpeg"
import icon from "../images/lp.png"
import bd from "../images/bd.png"
import ld from "../images/ld.png"
import styles from "./quemSou.module.css"
function QuemSou(){
    return(
        <div>
           <main>
        <section className={styles.sobre}>
            <div className={styles.interface}>
                <div className={styles.flex}>
                    <div className={styles.img_sobre}>
                        <img src={sim} alt=""></img>
                    </div>
                    <div className={styles.txt_sobre}>
                        <h2>MUITO PRAZER,
                            <span>SOU GUSTAVO LUCAS.</span>
                        </h2>
                        <p>Brasileiro, 22 anos nascido em Timóteo-MG. Estudante de Engenharia da Computação no CEFET-MG
                            Campus Timóteo.
                            Apaixonado por tecnologia , possuo grande interesse em trabalhar e aprender sobre diversos
                            tópicos da área
                            como desenvolvimento web e de softwares.
                        </p>
                        <p>Participei também de uma mobilidade academica ao Instituto Politécnico de Bragança em
                            Portugal onde tive a oportunidade
                            de estudar áreas como Desenvolvimento Web , Banco de Dados , Internet das Coisas e
                            Engenharia de Software em um dos melhores institutos Politécnicos da Europa.
                        </p>
                        <p>
                            Trabalhei como voluntário na empresa júnior da engenharia da computação , a Commit Jr. ,
                            como Diretor de Gestão e Gente, Gerente de Pessoas e como treinee da equipe de
                            Desenvolvimento de Jogos.
                        </p>
                    </div>

                </div>
            </div> 

        </section> 
        <section className={styles.especialidades}>
            <div className={styles.interface}>

                <h2>Especialidades:</h2>
                <div className={styles.flex}>
                    <div className={styles.barra}>
                        <img className={styles.icon} src={icon} alt=""></img>
                        <h1>Linguagens de Programação</h1>
                        <p>Conhecimento em Diversas linguagens de programação como Java,Python,C,C++,C#,JavaScript,PHP,etc.
                            Além de Outras Tecnologias como HTML e CSS.
                        </p>
                    </div>

                    <div className={styles.barra}>
                        <img className={styles.icon} src={bd} alt=""></img>
                        <h1>Banco de Dados</h1>
                        <p>Experiencia em criação, manutenção e utilização de Bancos de Dados Relacionais e Não Relacionais.
                        Conhecimento em MySQL,OracleSQL, PL/SQL e MongoDB.
                        </p>
                    </div>
                    
                    <div className={styles.barra}>
                        <img className={styles.icon} src={ld} alt=""></img>
                        <h1>Liderança de Equipes</h1>
                        <p>Experiencia em Liderança de Equipes, processos de Recursos Humanos, Financeiros e Juridicos.Conhecimento em Metodos Ágeis e aplicação para equipe</p>
                    </div>
                 
                </div>
                

            </div> 
        </section>
        
    </main>
        </div>
    )
}

export default QuemSou;