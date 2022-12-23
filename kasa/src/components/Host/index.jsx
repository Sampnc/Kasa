import "./index.css";
import React, { useState, useEffect } from "react";

export default function Host ({ host }) {
  const [dataHost, setDataHost] = useState({})

  useEffect(() => {
    if (host) {
      setDataHost(host)
    }
  })
    //console.log(dataHost.name)

    return (
        <div className="hostContainer">
          <h3>{dataHost.name}</h3>
          <img src={dataHost.picture} alt={dataHost.name} />
        </div>
    );
};