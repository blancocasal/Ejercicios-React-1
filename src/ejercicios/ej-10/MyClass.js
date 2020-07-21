import React from "react";

class MyClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ipAddress: "" };
  }

  // Intersante lectura relacionada con el manejo de errores con await https://javascript.info/async-await#error-handling

  async componentDidMount() {
    try {
      const resultApi = await fetch("https://api.ipify.org/?format=json");
      const resultJson = await resultApi.json();
      this.setState({ ipAddress: resultJson.ip });
      console.log("carga correcta");
    } catch (error) {
      alert("Error de carga de Api");
      console.log("carga incorrecta");
    }
  }

  render() {
    return (
      <h1>
        Mi ip es:
        {this.state.ipAddress.length > 1
          ? this.state.ipAddress
          : this.componentDidMount.error}
      </h1>
    );
  }
}

export default MyClass;
