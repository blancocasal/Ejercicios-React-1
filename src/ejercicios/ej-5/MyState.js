import React, { useState } from "react";

const MyState = () => {
  const [state, setState] = useState("Hola Mundo");

  return (
    <div className="alert alert-primary">
      <p>
        El valor por defecto del estado es: <h3>{state}</h3>
      </p>
    </div>
  );
};

export default MyState;
