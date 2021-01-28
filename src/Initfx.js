import React, { useState } from "react";

const Initfx = () => {
  const [token] = useState(() => {
    let token = window.localStorage.getItem("my-token");
    return token || "default#-token#";
  });
  return <div> My token is{token} </div>;
};

export default Initfx;
