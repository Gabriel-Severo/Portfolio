import styles from '../../styles/Projetos.module.css'
import Projeto from '../components/Projeto'
import Link from 'next/link'
import {projects} from '../projetos.json'

function Portfolio() {
    return (
        <div className={styles.projetos} id="projetos">
            {projects && projects.map((projeto, index) => {
                const link = `/projeto/${index}`
                return (
                    <Link href={link} key={index}>
                        <a href="#">
                            <Projeto projeto={projeto}/>
                        </a>
                    </Link>
                )
            })}
        </div>
    )
}

export default Portfolio