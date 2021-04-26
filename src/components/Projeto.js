import styles from '../../styles/Projeto.module.css'

function Projeto() {
    return (
        <div className={styles.itemProjeto}>
            <div className={styles.itemImagem}>
                <div className={styles.subInfo}>
                    <i className="fas fa-info-circle"></i>
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
        </div>
    )
}

export default Projeto