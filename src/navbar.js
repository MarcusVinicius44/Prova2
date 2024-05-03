import React from "react";

function Navbar(){
    return(
        <ul className="navbar">
            <img src={require('./imagens/SENAI.png')} alt="Descrição da imagem" className="imgsenai"/>
            <li className="linav">
                <a href="/" alt='.' className="anav">Home</a>
            </li>
            <li className="linav">
                <a href="/contato" alt='.' className="anav">Contato</a>
            </li>
            <li className="linav">
                <a href="/quemsomos" alt='.' className="anav">Quem Somos</a>
            </li>
            
        </ul>
    )
}

export default Navbar;