import styles from '../../styles/Projetos.module.css'
import Projeto from '../components/Projeto'
import Link from 'next/link'

function Portfolio() {
    return (
        <div className={styles.projetos} id="projetos">
            <Link href="/projeto/1">
                <a href="#">
                    <Projeto/>
                </a>
            </Link>
            <Projeto/>
            <Projeto/>
        </div>
    )
}

export default Portfolio