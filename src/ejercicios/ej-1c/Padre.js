import React from "react";
import Hijo from "./Hijo";

class Padre extends React.Component {
  render() {
    const text = "Yo soy tu padre";
    return (
      <div className="alert alert-primary">
        <h4>Padre</h4>
        <Hijo text={text} />
      </div>
    );
  }
}

export default Padre;
