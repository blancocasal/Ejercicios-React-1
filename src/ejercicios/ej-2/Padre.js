import React from "react";
import Hijo from "./Hijo";

const Padre = () => {
  const printText = () => {
    alert("Luke, yo soy tu padre");
    console.log("Luke, yo soy tu padre");
  };

  return (
    <div className="alert alert-primary">
      <h4>Padre</h4>
      <Hijo printText={printText} />
    </div>
  );
};

export default Padre;
