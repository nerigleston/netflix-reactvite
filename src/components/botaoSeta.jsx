import React, { useState } from "react";
import Perfil from "../src/assets/img/perfil.png";
import "../src/page/inicialPage/inicial.css";

function BotaoComSetaEPerfil() {
  // Use o estado para controlar a classe CSS
  const [virada, setVirada] = useState(false);

  // Funções para lidar com o hover no botão
  const handleBotaoMouseEnter = () => {
    // Define o valor do estado como true quando o mouse entra no botão
    setVirada(true);
  };

  const handleBotaoMouseLeave = () => {
    // Define o valor do estado como false quando o mouse sai do botão
    setVirada(false);
  };

  return (
    <div className="fose">
      <a href="#" target="blank">
        <img src={Perfil} alt="Magnifying Glass" width="32" height="32" />
      </a>

      <div
        className={`seta ${virada ? "virada" : ""}`}
        onMouseEnter={handleBotaoMouseEnter}
        onMouseLeave={handleBotaoMouseLeave}
      ></div>
    </div>
  );
}

export default BotaoComSetaEPerfil;
