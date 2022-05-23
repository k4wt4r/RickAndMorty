import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import Cardstyle from "../styles/scss/Cardstyle.module.scss";

function Location() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://rickandmortyapi.com/api/location");
      const characters = await res.json();
      setData(characters.results);
    })();
  }, []);

  return (
    <div className={Cardstyle.cardslocation}>
      {data.map((character, index) => (
        <div key={index}>
          <Card character={character} />
        </div>
      ))}
    </div>
  );
}

export default Location;
