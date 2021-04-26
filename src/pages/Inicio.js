import Menu from '../components/Menu'
import Header from '../components/Header'
import Projetos from '../components/Projetos'
import Formulario from '../components/Formulario'
import Footer from '../components/Footer'

export default function Inicio() {
    return (
        <div>
            <Menu/>
            <Header/>
            <Projetos/>
            <Formulario/>
            <Footer/>
        </div>
    )
}