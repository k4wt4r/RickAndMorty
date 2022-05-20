import React from "react";
import Card from "./Card";
import Cardstyle from "../../styles/scss/Cardstyle.module.scss";

function CardList({ characters }) {
  return (
    <div className={Cardstyle.cardlist}>
      {characters.map((character, index) => (
        <Card character={character} key={index} />
      ))}
    </div>
  );
}
export default CardList;
