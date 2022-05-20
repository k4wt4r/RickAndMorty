import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import Cardstyle from "../styles/scss/Cardstyle.module.scss";

function Characters() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const characters = await res.json();
      setData(characters.results);
    })();
  }, []);
  return (
    <div className={Cardstyle.charactersList}>
      {data.map((character, index) => (
        <Card character={character} key={index} />
      ))}
    </div>
  );
  // <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default Characters;
