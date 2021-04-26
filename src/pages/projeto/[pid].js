import { useRouter } from 'next/router'
import Menu from '../../components/Menu'
import styles from '../../../styles/ProjetoInfo.module.css'
import {projects} from '../../projetos.json'

export default function Projeto() {
    const router = useRouter()
    const { pid } = router.query
    const projeto = projects[pid]
    return (
        projeto != undefined ? (
        <div>
            <Menu visable={true}/>
            <div className={styles.projetoContainer}>
                <div className={styles.projetoImagem}>
                    <img src={projeto.img}></img>
                </div>
                <div className={styles.projetoInfo}>
                    <div className={styles.projetoNome}>
                        <span>Nome:</span> {projeto.name}
                    </div>
                    <div className={styles.criadoPor}>
                        <span>Criado em:</span> {projeto.createdBy}
                    </div>
                    <div className={styles.completadoEm}>
                        <span>Data de finalização:</span> {projeto.completedOn}
                    </div>
                    <div className={styles.categorias}>
                        <span>Categorias: </span>{projeto.categories}
                    </div>
                    <div className={styles.link}>
                        <a href={projeto.link}>Link</a>
                    </div>
                    <div className={styles.descricacao}>
                        {projeto.description}
                    </div>
                </div>
            </div>
        </div>
        ) : (
            <div>Este projeto não existe</div>
        )
    )
}