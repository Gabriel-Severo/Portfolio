import styles from '../../styles/Formulario.module.css'
function Formulario() {
    return (
        <div className={styles.formContainer} id="contato">
            <h2>Entre em contato</h2>
            <p className={styles.formDescricao}>Entre em contato pelo e-mail gabriel.severo@ifms.edu.br, pelo número (67) 99973-5362 ou utilize o formulário</p>
            <hr className={styles.formHr}/>
            <form className={styles.formulario}>
                <div className={styles.formUser}>
                    <input className={styles.formInput} placeholder="Nome" type="text" required/>
                    <input className={styles.formInput} placeholder="E-mail" type="email" required/>
                </div>
                <input className={styles.formInput} placeholder="Assunto" type="text" required/>
                <textarea className={styles.formInput} placeholder="Mensagem" required/>
                <input className={styles.submit} type="submit"/>
            </form>
        </div>
    )
}

export default Formulario