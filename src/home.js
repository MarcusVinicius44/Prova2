import React from "react";
import './imghome.css';
function Home(){
    return(
        <div className="pai">
        <h1 className="titulohome">Bem-Vindo à Página Inicial da nossa AV2</h1>
        <h3 className="subhome">Conheça os melhores Cosplays SESI/SENAI.</h3>
        <div className="imghome">
            <img src={require('./imagens/FOTO3.jpg')} alt="Descrição da imagem" className="img1" width={180} height={320}/>
            <img src={require('./imagens/FOTO6.jpg')} alt="Descrição da imagem1" className="img1" width={180} height={320}/>
            <img src={require('./imagens/FOTO7.jpg')} alt="Descrição da imagem2" className="img2" width={180} height={320}/>
            <img src={require('./imagens/FOTO5.jpg')} alt="Descrição da imagem3" className="img2" width={180} height={320}/>
            <img src={require('./imagens/FOTO4.jpg')} alt="Descrição da imagem4" className="img2" width={180} height={320}/>
            <img src={require('./imagens/HOME.jpg')} alt="Descrição da imagem5" className="img1" width={180} height={320}/>
        </div>
            <div className="legenda">
            <h3>Povo da Turma <br></br> da Mônica</h3>
            <h3>Foveiras e o <br></br>Teacher TOP!!!</h3>
            <h3>As Operadoras <br></br>TIM e Claro +<br></br> Flanelinha</h3>
            <h3>Tigrinho Man</h3>
            <h3>Dollynho e não <br></br>sei as outras <br></br>duas</h3>
            <h3>A turma mais <br></br>F$#% do <br></br>SESI/SENAI</h3>
            </div>
        </div>
    )
}

export default Home;