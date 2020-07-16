import React from "react";
import MyLabel from "./MyLabel";
import Boton from "./Boton";

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
  }

  sumaClick = () => {
    console.log("Hola");
    this.setState({ ...this.state, clicks: this.state.clicks + 1 });
  };

  render() {
    return (
      <div className="alert alert-primary">
        <MyLabel clicks={this.state.clicks} />
        <Boton function={this.sumaClick} />
      </div>
    );
  }
}

export default Contador;
