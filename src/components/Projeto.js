import styles from '../../styles/Projeto.module.css'

function Projeto({projeto}) {
    return (
        <div className={styles.itemProjeto}>
            <div className={styles.itemImagem}>
                <div className={styles.subInfo}>
                    <i className="fas fa-info-circle"></i>
                </div>
                <img src={projeto.img}/>
            </div>
            <div className={styles.itemFooter}>
                <div className={styles.itemTitle}>
                    {projeto.name}
                </div>
                <div className={styles.itemDescricao}>
                    {projeto.description.length > 40 ? 
                    projeto.description.split('').map((letra, index)=> {
                        if(index < 35)
                            return letra
                        if(index == 36)
                            return "..."
                    }):
                        projeto.description
                    }
                </div>
            </div>
        </div>
    )
}

export default Projeto