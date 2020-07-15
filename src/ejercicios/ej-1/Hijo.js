import React from "react";
import Padre from "./Padre";
// HOLA 2

const Hijo = (props) => {
  return (
    <div className="alert alert-success">
      <h4>Hijo</h4>
      <h1>{props.texto}</h1>
    </div>
  );
};

export default Hijo;
