import styles from '../../styles/Footer.module.css'
function Footer() {
    return (
        <div className={styles.footerContainer}>
            <p className={styles.footerText}>Site de portfólio 2021</p>
            <div className={styles.contatoIcons}>
                <a href="https://github.com/Gabriel-Severo">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/gabriel-rodrigues-50407a1a5/">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer