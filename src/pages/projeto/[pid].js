import { useRouter } from 'next/router'
import Menu from '../../components/Menu'
import styles from '../../../styles/ProjetoInfo.module.css'

export default function Projeto() {
    const router = useRouter()
    const { pid } = router.query
    return (
        <div>
            <Menu visable={true}/>
            <div className={styles.projetoContainer}>
                <div className={styles.projetoImagem}>
                    <img src="http://preview.hasthemes.com/portflow/images/portfolio/equal/1.jpg"></img>
                </div>
                <div className={styles.projetoInfo}>
                    <div className={styles.projetoNome}>
                        
                    </div>
                    <div className={styles.criadoEm}>
                        
                    </div>
                    <div className={styles.completadoEm}>
                        
                    </div>
                    <div className={styles.categorias}>
                        
                    </div>
                    <div className={styles.link}>
                        
                    </div>
                    <div className={styles.descricacao}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}