import React from "react";

class MyClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ipAddress: "" };
  }

  async componentDidMount() {
    const resultIp = await fetch("https://api.ipify.org/?format=json");
    const resultJson = await resultIp.json();
    this.setState({ ipAddress: resultJson.ip });
  }

  render() {
    return <h1>Mi ip es {this.state.ipAddress}</h1>;
  }
}

export default MyClass;
