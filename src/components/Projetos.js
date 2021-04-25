import styles from '../../styles/Projetos.module.css'
import Projeto from '../components/Projeto'

function Portfolio() {
    return (
        <div className={styles.projetos}>
            <Projeto/>
        </div>
    )
}

export default Portfolio