import React from "react";
import { Typography } from "@material-ui/core";

const RoutingSlide = () => (
  <div className="slide">
    <Typography variant="h1">Roteirização com react-router-dom</Typography>
    <Typography variant="body1">
      O react-router-dom é uma biblioteca popular para lidar com roteamento em
      aplicações React. Ele fornece um conjunto de componentes que permitem
      criar rotas e navegar entre diferentes páginas dentro da aplicação.
      <br />
      <br />
      Com o react-router-dom, é possível definir rotas para diferentes URLs e
      mapeá-las para componentes específicos. Isso permite a criação de
      aplicativos com várias páginas e uma navegação suave entre elas.
    </Typography>
  </div>
);

export default RoutingSlide;
