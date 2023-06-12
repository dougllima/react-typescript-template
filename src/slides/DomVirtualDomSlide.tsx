import React from "react";
import { Typography } from "@material-ui/core";

const DomVirtualDomSlide = () => (
  <div className="slide">
    <Typography variant="h1">Conceitos Básicos de DOM e Virtual DOM</Typography>
    <Typography variant="body1">
      O Document Object Model (DOM) é uma representação em memória da estrutura
      de elementos HTML de uma página. O DOM permite manipular e interagir com
      os elementos HTML por meio do JavaScript.
      <br />
      <br />O Virtual DOM é um conceito introduzido pelo React.js. Ele é uma
      representação leve e eficiente do DOM atual da página. O React usa o
      Virtual DOM para realizar atualizações eficientes na interface do usuário,
      minimizando a manipulação direta do DOM real.
    </Typography>
  </div>
);

export default DomVirtualDomSlide;
