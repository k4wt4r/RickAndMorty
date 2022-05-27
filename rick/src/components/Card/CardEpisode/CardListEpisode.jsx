import React from 'react'
import Episodespage from '../../../styles/scss/Episodespage.module.scss'

function CardListEpisode({ episodes, loading }) {
    if (loading)
        return (<h3>Loading ...</h3>)
    return (
        <div className={Episodespage.cardsOfEpisodes}>
            {episodes.map((episode, index) => (
                <div key={index} className={Episodespage.episode}>
                    <span>Name: </span>
                    {episode.name}
                </div>))}
        </div>
    )
}

export default CardListEpisode