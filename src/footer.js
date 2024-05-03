import React from "react";

function Footer(){
    return(
        <ul className="footer">
            <img src={require('./imagens/SESI.png')} alt="Descrição da imagem" className="imgsesi"/>
            <p className="textofooter">© 2024 Todos os direitos reservados ao povo do 3º/Informática para Internet.</p>
            <p className="textofooter1">Contato: almossar@cabacos.com</p>
        </ul>
    )
}

export default Footer;