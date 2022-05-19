import React, { useState, useEffect } from "react";
import Card from "./SingleCard";

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
    <div>
      {data.map((character, index) => (
        <Card character={character} key={index} />
      ))}
    </div>
  );
}

export default Characters;
