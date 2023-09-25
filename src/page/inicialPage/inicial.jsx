import React from "react";
import "./inicial.css";
import Img from "../../assets/img/magnifying-glass-solid.svg";
import Alert from "../../assets/img/bell-solid.svg";
import Repeat from "../../assets/play-solid.svg";
import Idade from "../../assets/react.svg";
import Nome from "../../assets/img/rag-nome.webp";
import Play from "../../assets/assistir.svg";
import Info from "../../assets/maisinfo.svg";
import BotaoComSeta from "../../components/botaoSeta"

function Inicial() {
  return (
    <header>
      <div className="logo">
        <a href="https://www.netflix.com/browse">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            width="93"
            height="31"
            alt="Netflix Logo"
          />
        </a>
        <a href="https://www.netflix.com/browse">Início</a>
        <a href="https://www.netflix.com/browse/genre/83">Séries</a>
        <a href="https://www.netflix.com/browse/genre/34399">Filmes</a>
        <a href="https://www.netflix.com/latest">Bombando</a>
        <a href="https://www.netflix.com/browse/my-list">Minha lista</a>
        <a href="https://www.netflix.com/browse/original-audio">
          Navegar por Idiomas
        </a>
      </div>
      <div className="outros">
        <a href="">
          <img src={Img} alt="Magnifying Glass" width="24" height="24" />
        </a>
        <a href="https://www.netflix.com/Kids">
          <p>Infantil</p>
        </a>
        <a href="">
          <img src={Alert} alt="Magnifying Glass" width="24" height="24" />
        </a>
        <div>
          <BotaoComSeta />
        </div>
      </div>
    </header>
  );
}

function Body() {
  return (
    <>
      <div className="nomeRag">
        <img src={Nome} alt="nome" width="492" height="197" />
        <div className="txt">
          <p>
            Em uma cidade norueguesa envenenada pela poluição e abalada por
            <br /> geleiras derretendo, o fim dos tempos parece real. Só uma
            lenda
            <br /> poderá combater um mal antigo.
          </p>
        </div>
      </div>
      <div className="botao">
        <button>
          <div className="botaoassistir">
            <a
              href="https://www.netflix.com/watch/80994165?trackId=255824129&tctx=0%2C0%2Cff4afd2a-ab53-49c2-9598-9f38d93b898b-118862010%2Cff4afd2a-ab53-49c2-9598-9f38d93b898b-118862010%7C2%2Cunknown%2C%2C%2C%2C%2CVideo%3A80232926%2C"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                paddingLeft: "2rem",
                paddingRight: "2.4rem",
              }}
            >
              <img src={Play} alt="Play" />
              <span className="text">
                <strong>Assistir</strong>
              </span>
            </a>
          </div>
        </button>
        <div></div>
        <button>
          <div className="botaoinfo">
            <a
              href="https://www.netflix.com/title/80232926"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                paddingLeft: "2rem",
                paddingRight: "2.4rem",
              }}
            >
              <img src={Info} alt="Info" />
              <span className="text">
                <strong>Mais informações</strong>
              </span>
            </a>
          </div>
        </button>
        <button>
          <div className="repeat">
            <img src={Repeat} alt="Magnifying Glass" />
          </div>
        </button>
        <div className="idade">
          <img src={Idade} alt="Magnifying Glass" />
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <div>
      <Inicial />
      <Body />
    </div>
  );
}

export default App;
