import React from "react";
import MyLabel from "./MyLabel";
import Boton from "./Boton";
import { useState } from "react";

const Contador = () => {
  const [clicks, setClicks] = useState(0);

  const sumaClick = () => {
    setClicks(clicks + 1);

    // Ingresa aquí tu código para aumentar el contador
  };
  return (
    <div className="alert alert-primary">
      <MyLabel clicks={clicks} />
      <Boton function={sumaClick} />
    </div>
  );
};

export default Contador;
