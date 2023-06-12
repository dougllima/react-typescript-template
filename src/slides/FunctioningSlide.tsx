import React from "react";
import { Typography } from "@material-ui/core";

const FunctioningSlide = () => (
  <div className="slide">
    <Typography variant="h1">Funcionamento do React.js</Typography>
    <Typography variant="body1">
      O React.js utiliza um modelo de programação baseado em componentes. Cada
      componente é responsável por renderizar uma parte específica da interface
      do usuário. O estado e as propriedades de um componente determinam como
      ele será renderizado.
      <br />
      <br />
      Quando ocorrem alterações no estado ou nas propriedades de um componente,
      o React atualiza a representação virtual desse componente e compara com a
      versão anterior do Virtual DOM para identificar as diferenças. Em seguida,
      o React atualiza apenas as partes necessárias na interface do usuário para
      refletir essas diferenças.
    </Typography>
  </div>
);

export default FunctioningSlide;
