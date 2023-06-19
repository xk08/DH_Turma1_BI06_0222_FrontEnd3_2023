import React, { useContext } from 'react'
import "../App.css"
import LanguageContext from '../context'

const Navbar = () => {
    /* DICA: Descomente esse bloco de código, quando "App.jsx" tiver um provider
    const { language, handleChangeLA } = useContext(LanguageContext)
    const {text} = language
    
    */
    return (
        <div className="navbar">
            {/* DICA: Deixe essas informações dinâmicas, utilize os valores capturados via contexto (veja 'text', na linha 8) */}
            <p>Início</p> 
            <p>Idioma atual: PTBR</p>
            <button>Alterar idioma</button>
        </div>
    )
}

export default Navbar