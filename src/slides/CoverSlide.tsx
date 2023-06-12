import React from "react";
import { Typography } from "@material-ui/core";
import MarioCoverImage from "../assets/mario-cover.svg";

const CoverSlide = () => {
  return (
    <div className="slide">
      <Typography variant="h1">Apresentação sobre React.js</Typography>
      <img src={MarioCoverImage} alt="Mario Cover" />
    </div>
  );
};

export default CoverSlide;
