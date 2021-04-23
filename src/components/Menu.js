import styles from '../../styles/Menu.module.css'
function Menu() {
    return (
        <div className={styles.menuContainer}>
            <h1 className={styles.menuTitle}>
                <a href="#">Gabriel Rodrigues</a>
            </h1>
            <ul className={styles.menu}>
                <li className={styles.menuItem}>
                    <a href="#">Ínicio</a>
                </li>
                <li className={styles.menuItem}>
                    <a href="#">Portifólio</a>
                </li>
                <li className={styles.menuItem}>
                    <a href="#">Contato</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu