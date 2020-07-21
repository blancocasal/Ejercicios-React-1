import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [ipAddress, SetIpAddress] = useState(null);

  useEffect(() => {
    takeIp();
  }, []);

  const takeIp = async () => {
    const resultIp = await fetch("https://api.ipify.org/?format=json");
    const resultJson = await resultIp.json();
    SetIpAddress(resultJson.ip);
  };

  return <h1>Mi ip es {ipAddress}</h1>;
};

export default MyComponent;
