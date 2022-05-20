import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import Cardstyle from "../styles/scss/Cardstyle.module.scss";

function Characters({ character }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const characters = await res.json();
      setData(characters.results);
    })();
  }, []);
  return (
    <div className={Cardstyle.characterspage}>
      <input
        type="search"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className={Cardstyle.charactersList}>
        {data
          .filter((character) => {
            if (search === "") {
              return character;
            } else if (
              character.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return character;
            }
          })
          .map((character, index) => (
            <div key={index} className={Cardstyle.characterslist}>
              <Card character={character} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Characters;
