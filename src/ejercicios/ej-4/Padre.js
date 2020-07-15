import React from "react";
import Hijo from "./Hijo";

const Padre = (props) => {
  const printCustomText = (text) => {
    console.log(text);
  };

  return (
    <div className="alert alert-primary">
      <h4>Padre</h4>
      <Hijo myFunction={printCustomText} />
    </div>
  );
};

export default Padre;
