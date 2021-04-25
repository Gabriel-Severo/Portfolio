import styles from '../../styles/Projetos.module.css'

function Portfolio() {
    return (
        <div className={styles.projetos}>
            <div className={styles.itemProjeto}>
                <a href="#">
                    <div className={styles.itemImagem}>
                        <div className={styles.subInfo}>
                            <i class="fas fa-info-circle"></i>
                        </div>
                        <img src="http://preview.hasthemes.com/portflow/images/portfolio/equal/1.jpg"></img>
                    </div>
                    <div className={styles.itemFooter}>
                        <div className={styles.itemTitle}>
                            Caneca
                        </div>
                        <div className={styles.itemDescricao}>
                            Esta é uma caneca
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Portfolio