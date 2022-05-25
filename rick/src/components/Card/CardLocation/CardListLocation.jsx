import React from 'react';
import CardLocation from "./CardLocation";
import Cardstyleforlocations from "../../../styles/scss/Cardstyleforlocations.module.scss"

function CardListLocation({ locations }) {
    return (
        <div className={Cardstyleforlocations.locationCards}>
            {locations.map((location, index) => (
                <CardLocation location={location} key={index} />
            ))}
        </div>
    )
}

export default CardListLocation;