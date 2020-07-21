import React from "react";
import Spinner from "react-bootstrap/Spinner";

class MyClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ipAddress: "" };
  }

  async componentDidMount() {
    try {
      const resultApi = await fetch("https://api.ipify.org/?format=json");
      const resultApiJson = await resultApi.json();
      this.setState({ ipAddress: resultApiJson.ip });
      console.log("carga correcta");
    } catch (e) {
      console.log("carga incorrecta");
    }
  }

  render() {
    return (
      <div>
        <h1>
          Mi Ip es:
          {this.state.ipAddress.length > 2 ? (
            this.state.ipAddress
          ) : (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
        </h1>
      </div>
    );
  }
}

export default MyClass;
