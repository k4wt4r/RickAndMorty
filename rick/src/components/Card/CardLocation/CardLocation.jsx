import React from "react";
import Cardstyleforlocations from "../../../styles/scss/Cardstyleforlocations.module.scss";

function CardLocation({ location }) {
    return (

        <div className={Cardstyleforlocations.namesOfLocations}><span className={Cardstyleforlocations.nameLabel}>Name: </span>{location.name}</div>

    );
}

export default CardLocation;
