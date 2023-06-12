import React from "react";
import { Typography } from "@material-ui/core";
import MarioPowerUpImage from "../assets/mario-powerup.svg";

const HooksSlide = () => (
  <div className="slide">
    <Typography variant="h1">Evolução do React.js com foco em Hooks</Typography>
    <Typography variant="body1">
      O React introduziu os Hooks na versão 16.8. Os Hooks são funções que
      permitem utilizar o estado e outras funcionalidades do React em
      componentes funcionais, sem a necessidade de escrever uma classe.
      <br />
      <br />
      Os Hooks simplificam o desenvolvimento, permitindo o compartilhamento de
      lógica entre componentes, melhorando a reutilização de código e tornando-o
      mais legível.
    </Typography>
    <img src={MarioPowerUpImage} alt="Mario Power Up" />
  </div>
);

export default HooksSlide;
