import { useEffect } from 'react'
import styles from '../../styles/Menu.module.css'
import Link from 'next/link'
function Menu({visable}) {
    useEffect(() => {
        const menu = document.querySelector('#menu')
        if(visable){
            menu.style.backgroundColor = "rgba(0, 0, 0, 0.6)"
            return;
        }
        window.addEventListener('scroll', () => {
            if(window.scrollY > 300){
                menu.style.backgroundColor = "rgba(0, 0, 0, 0.6)"
                return;
            }
            menu.style.backgroundColor = "transparent"
        })
    }, [])
    return (
        <div className={styles.menuContainer} id="menu">
            <h1 className={styles.menuTitle}>
                <Link href="/">
                    <a href="#">Gabriel Rodrigues</a>
                </Link>
            </h1>
            <ul className={styles.menu}>
                <li className={styles.menuItem}>
                    <Link href="/#">
                        <a href="#">Ínicio</a>
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/#projetos">
                        <a href="#projetos">Portifólio</a>
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/#contato">
                        <a href="#contato">Contato</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu