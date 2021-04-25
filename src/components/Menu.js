import { useEffect } from 'react'
import styles from '../../styles/Menu.module.css'
function Menu() {
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const menu = document.querySelector('#menu')
            if(window.scrollY > 300){
                menu.style.backgroundColor = "rgba(0, 0, 0, 0.)"
                return;
            }
            menu.style.backgroundColor = "transparent"
        })
    }, [])
    return (
        <div className={styles.menuContainer} id="menu">
            <h1 className={styles.menuTitle}>
                <a href="#">Gabriel Rodrigues</a>
            </h1>
            <ul className={styles.menu}>
                <li className={styles.menuItem}>
                    <a href="#">Ínicio</a>
                </li>
                <li className={styles.menuItem}>
                    <a href="#projetos">Portifólio</a>
                </li>
                <li className={styles.menuItem}>
                    <a href="#contato">Contato</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu