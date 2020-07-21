import React, { useState, useEffect } from "react";

const MyComponent = () => {
  const [ipAddress, setIpAddres] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    takeIp();
  }, []);

  const takeIp = async () => {
    try {
      const resultApi = await fetch("https://api.ipify.org/pepe/?format=json");
      const resultJson = await resultApi.json();
      setIpAddres(resultJson);
    } catch (e) {
      setError("Error de API");
    }
  };

  return <h1>Mi ip es: {ipAddress ? takeIp() : error}</h1>;
};

export default MyComponent;
