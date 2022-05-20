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
      <div className={Cardstyle.charactername}>{character.name}</div>
    </div>
  );
}
export default Card;
