import React, { useState, useEffect } from "react";

const MyComponent = () => {
  const [resultIp, setResultIp] = useState();

  // const findIp = async ()=>{
  //     const result = await fetch("")
  // }

  useEffect(() => {
    takeIp();
  }, []);

  const takeIp = async () => {
    const result = await fetch("https://api.ipify.org/?format=json");
    const resultJson = result.json();
    setResultIp(resultJson);
    console.log(resultJson);
  };

  return (
    <div>
      <h1>Cargando...</h1>
      <h1>Mi ip es </h1>
    </div>
  );
};

export default MyComponent;
