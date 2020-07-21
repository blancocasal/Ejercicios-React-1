import React, { useState, useEffect } from "react";

const MyComponent = () => {
  const [result, setResult] = useState("");

  const takeApi = async () => {
    const resultApi = await fetch("https://api.chucknorris.io/jokes/random");
    const resultJson = await resultApi.json();
    setResult(resultJson.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src="https://1.bp.blogspot.com/-kx66K2UWZLA/UE2m_Ab5kOI/AAAAAAAABe8/WKVu3O4DgpI/s1600/Chuck.jpg" />
      <button onClick={takeApi}>Cargar frase</button>
      <h1> {result}</h1>
    </div>
  );
};

export default MyComponent;
