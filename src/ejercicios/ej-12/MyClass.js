import React from "react";

class MyClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chuckFact: "" };
  }

  handleClick = async () => {
    const result = await fetch("https://api.chucknorris.io/jokes/random");
    const resultJson = await result.json();
    this.setState({ chuckFact: resultJson.value });
    return result;
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src="https://1.bp.blogspot.com/-kx66K2UWZLA/UE2m_Ab5kOI/AAAAAAAABe8/WKVu3O4DgpI/s1600/Chuck.jpg" />
        <button onClick={this.handleClick}>Cargar frase</button>
        <h1>{this.state.chuckFact}</h1>
      </div>
    );
  }
}

export default MyClass;
