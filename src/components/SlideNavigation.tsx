import React from "react";
import { Link } from "react-router-dom";
import { Button, Toolbar } from "@material-ui/core";

const SlideNavigation = () => (
  <Toolbar>
    <Button component={Link} to="/" color="primary">
      Capa
    </Button>
    <Button component={Link} to="/dom-virtual-dom" color="primary">
      DOM e Virtual DOM
    </Button>
    <Button component={Link} to="/motivation-history" color="primary">
      Motivação e História
    </Button>
    <Button component={Link} to="/functioning" color="primary">
      Funcionamento
    </Button>
    <Button component={Link} to="/hooks" color="primary">
      Evolução com Hooks
    </Button>
    <Button component={Link} to="/other-technologies" color="primary">
      Outras Tecnologias
    </Button>
    <Button component={Link} to="/routing" color="primary">
      Roteirização
    </Button>
    <Button component={Link} to="/conclusion" color="primary">
      Conclusão
    </Button>
  </Toolbar>
);

export default SlideNavigation;
