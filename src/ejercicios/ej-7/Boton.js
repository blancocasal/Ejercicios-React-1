import React from "react";

const Boton = (props) => {
  return (
    <button className="btn btn-info" onClick={props.function}>
      suma 1
    </button>
  );
};

export default Boton;
