import React from "react";
import { Typography } from "@material-ui/core";

const OtherTechnologiesSlide = () => (
  <div className="slide">
    <Typography variant="h1">
      Outras Tecnologias no Ecossistema React
    </Typography>
    <Typography variant="body1">
      Além do React.js, existem outras bibliotecas populares frequentemente
      utilizadas no desenvolvimento de aplicações React. Algumas delas incluem:
      <br />
      <br />
      - Next.js: Um framework para construção de aplicativos React com recursos
      avançados de renderização do lado do servidor (SSR) e renderização do lado
      do cliente (CSR).
      <br />
      - Redux: Uma biblioteca para gerenciamento de estado na camada de
      interface do usuário, facilitando o compartilhamento de dados entre
      componentes.
      <br />- Material-UI: Uma biblioteca de componentes de interface do usuário
      prontos para uso, com base no Material Design.
    </Typography>
  </div>
);

export default OtherTechnologiesSlide;
