import React from "react";

const Hijo = (props) => {
  return (
    <div className="alert alert-success">
      <h4>Hijo</h4>
      <button className="btn btn-info" onClick={props.printText}>
        ¡Dar click aquí!
      </button>
    </div>
  );
};

export default Hijo;
