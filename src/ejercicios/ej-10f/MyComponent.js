import React, { useState, useEffect } from "react";

const MyComponent = () => {
  const [ipAddress, setIpAddres] = useState("");
  const [error, setError] = useState();

  useEffect(() => {
    takeIp();
  }, []);

  // https://api.ipify.org/?format=json

  const takeIp = async () => {
    try {
      const resultApi = await fetch("https://api.ipify.org/e?format=json");
      const resultJson = await resultApi.json();
      setIpAddres(resultJson.ip);
    } catch (e) {
      setError(e);
    }
  };

  return <h1>Mi ip es: {ipAddress === "" ? "Error de Api" : ipAddress}</h1>;
};

export default MyComponent;
