import arrow from '../images/down.png'
import styles from './projetos.module.css'
function Projetos(){
    return(
        <div>
           <main>
        <section className={styles.projetos}>
            <div class="interface">
                <h2>Conheça um Pouco dos Projetos Realizados:</h2>

                <div className={styles.barras}>
                    <div className={styles.txt_barra}>
                        <details className={styles.card}>
                            <summary className={styles.title}>
                                <h1>Projeto 1: <span className={styles.empresa}>PIGTE</span></h1>
                                <img className={styles.arrow} src={arrow} alt=""></img>
                            </summary>
                            <div className={styles.texto}>
                                <p>A Plataforma Integrada de Gerenciamento de Tarefas Empresariais (PIGTE) é um projeto ambicioso e inovador no campo do desenvolvimento de software, com o objetivo de criar uma solução abrangente para otimizar o gerenciamento de tarefas e projetos em ambientes empresariais. A PIGTE visa aprimorar a eficiência, a colaboração e a visibilidade das tarefas em organizações de todos os tamanhos, desde startups até grandes empresas.</p>
                            </div>
                        </details>
                    </div>

                </div>

                <div className={styles.barras}>
                    <div className={styles.txt_barra}>
                        <details className={styles.card}>
                            <summary className={styles.title}>
                                <h1>Projeto 2: <span className={styles.empresa}>Aplicativo de Saúde e Bem-Estar</span></h1>
                                <img className={styles.arrow} src={arrow} alt=""></img>
                            </summary>
                            <div className={styles.texto}>
                                <p>O objetivo deste projeto é desenvolver um aplicativo móvel abrangente voltado para a promoção da saúde e bem-estar dos usuários. O aplicativo fornecerá recursos que abrangem desde o monitoramento da saúde física até o suporte emocional, com o intuito de ajudar os usuários a adotarem hábitos saudáveis e a alcançarem seus objetivos de bem-estar..</p>
                            </div>
                        </details>
                    </div>
                </div>

                <div className={styles.barras}>
                    <div className={styles.txt_barra}>
                        <details className={styles.card}>
                            <summary className={styles.title}>
                                <h1>Projeto 3 : <span className={styles.empresa}>Sistema de Gerenciamento de Estoque para E-commerce</span></h1>
                                <img className={styles.arrow} src={arrow} alt=""></img>
                            </summary>
                            <div className={styles.texto}>
                                <p>Este projeto tem como objetivo desenvolver um sistema de gerenciamento de estoque personalizado para um e-commerce de médio porte. O sistema será projetado para automatizar e otimizar o controle de estoque, pedidos e fornecimento de produtos, permitindo uma gestão eficiente do inventário e garantindo que os produtos estejam disponíveis para os clientes no momento certo.</p>
                            </div>
                        </details>
                    </div>
                </div>

            </div> 

        </section> 
    </main>
        </div>
    )
}

export default Projetos;