import React, { Component } from "react";

class Hijo extends React.Component {
  render() {
    return (
      <div className="alert alert-success">
        <h4>Hijo</h4>
        <button className="btn btn-info" onClick={this.props.function}>
          ¡Dar click aquí!
        </button>
      </div>
    );
  }
}

export default Hijo;
