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
                        <span className={styles.projetoText}>Nome:</span> {projeto.name}
                    </div>
                    <div className={styles.criadoPor}>
                        <span className={styles.projetoText}>Criado em:</span> {projeto.createdBy}
                    </div>
                    <div className={styles.completadoEm}>
                        <span className={styles.projetoText}>Data de finalização:</span> {projeto.completedOn}
                    </div>
                    <div className={styles.categorias}>
                        <span className={styles.projetoText}>Categorias: </span>{
                            projeto.categories.reduce((atual, valor) => {
                                return atual + ", " + valor
                            })
                        }
                    </div>
                    <div className={styles.link}>
                        <a className={styles.projetoLink} href={projeto.link}>Acessar projeto</a>
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