import styles from '../../styles/Header.module.css'
function Header() {
    return (
        <div className={styles.headerContainer}>
            <h1 className={styles.headerTitulo}>Portfólio</h1>
            <hr class={styles.headerHR}/>
            <p className={styles.headerDescricao}>Descrição</p>
        </div>
    )
}

export default Header