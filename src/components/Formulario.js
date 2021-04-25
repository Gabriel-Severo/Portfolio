import styles from '../../styles/Formulario.module.css'
function Formulario() {
    return (
        <div className={styles.formContainer} id="contato">
            <h2>Entre em contato</h2>
            <hr className={styles.formHr}/>
            <form className={styles.formulario}>
                <div className={styles.formUser}>
                    <input className={styles.formInput} placeholder="Nome" type="text"/>
                    <input className={styles.formInput} placeholder="E-mail" type="email"/>
                </div>
                <input className={styles.formInput} placeholder="Assunto" type="text"/>
                <textarea className={styles.formInput} placeholder="Mensagem"/>
                <input className={styles.submit} type="submit"/>
            </form>
        </div>
    )
}

export default Formulario