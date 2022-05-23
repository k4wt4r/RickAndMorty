import React from "react";
import Cardstyle from "../../styles/scss/Cardstyle.module.scss";

function Card({ character }) {
  return (
    <div className={Cardstyle.card}>
      <img
        className={Cardstyle.imgCard}
        src={character.image}
        alt={character.name}
      />
      <div className={Cardstyle.charactername}>
        <div className={Cardstyle.namesofcharacters}>{character.name}</div>
        <div className={Cardstyle.speciesofcharacters}>{character.species}</div>
        <div className={Cardstyle.genderofcharacters}>{character.gender}</div>
      </div>
    </div>
  );
}
export default Card;