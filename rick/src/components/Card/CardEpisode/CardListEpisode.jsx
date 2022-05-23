import React from 'react'
import CardEpisode from './CardEpisode'


function CardListEpisode({ episodes }) {
    return (
        <div>
            {episodes.map((episode, index) => (
                <div key={index}>
                    <CardEpisode episode={episode} />
                </div>))}
        </div>
    )
}

export default CardListEpisode