import styles from '../../styles/Header.module.css'
function Header() {
    return (
        <div className={styles.headerContainer}>
            <h1 className={styles.headerTitulo}>Portfólio</h1>
            <hr className={styles.headerHR}/>
            <p className={styles.headerDescricao}>Olá meu nome é Gabriel Rodrigues, estudo no IFMS, atualmente estou no 5º semestre, utilizo das tecnologias apresentadas no curso para desenvolver sites utilizando os frameworks de React e Next.JS, e alguns projetos de back end utilizando Javascript.</p>
        </div>
    )
}

export default Header