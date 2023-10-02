import styles from './footer.module.css'
import {Link} from 'react-router-dom'
import linkedin from '../images/lkd.png'
import instagram from '../images/instagram.png'
import whatsapp from "../images/wpp.png"
function Footer(){
    return(   
 <div>
    <footer>

        <div className={styles.interface}>
            <div className={styles.block}>
                <div className={styles.imagens}> 
                <Link to="https://www.linkedin.com/in/gustavo-lucas-7b44aa231/"><img src={linkedin} width="32px" height="32px"></img></Link>
                <Link to="https://www.instagram.com/gus_lucas12/"><img src={instagram} width="32px" height="32px"></img></Link>
                <Link to=""><img src={whatsapp} width="32px" height="32px"></img></Link>
    </div>
    <div className={styles.txt}>
        <p>&copy; 2023 Gustavo Lucas.</p>
    </div>
</div>



</div>

</footer>
    </div>
    
    )
}
export default Footer;