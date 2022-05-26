import React from 'react';
import Locationspage from '../../../styles/scss/Locationspage.module.scss'

function CardListLocation({ locations, loading }) {
    if (loading)
        return (<h3>loading...</h3>)
    return (
        <div className={Locationspage.locationCards}>
            {locations.map((location, index) => (
                <div key={index} className={Locationspage.locationCard}>
                    <span>Name: </span>
                    {location.name}
                </div>
            ))}

        </div>
    )
}

export default CardListLocation;