import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

const MyComponent = () => {
  const [resultIp, setResultIp] = useState("");

  useEffect(() => {
    takeIp();
  }, []);

  const takeIp = async () => {
    const result = await fetch("https://api.ipify.org/?format=json");
    const resultJson = await result.json();
    setResultIp(resultJson.ip);
  };

  return (
    <div>
      <h1>
        Mi ip es:
        {resultIp.length < 5 ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          resultIp
        )}
      </h1>
    </div>
  );
};

export default MyComponent;
