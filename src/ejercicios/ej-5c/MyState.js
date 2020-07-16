import React from "react";

class MyState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myTexto: "Hola Mundo" };
  }

  render() {
    return (
      <div className="alert alert-primary">
        <p>
          El valor por defecto del estado es: {this.state.myTexto}
          {/* Muestra aquí el valor por defecto del estado */}
        </p>
      </div>
    );
  }
}

export default MyState;
