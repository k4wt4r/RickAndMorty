import React, { useEffect, useState } from 'react';
import CardEpisode from './Card/CardEpisode/CardEpisode';


function Episodes() {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch("https://rickandmortyapi.com/api/episode");
            const episodes = await res.json();
            setData(episodes.results);
        })();
    }, []);

    return (

        <div>
            {data.map((episode, index) => (
                <div key={index}>
                    <CardEpisode episode={episode} />

                </div>))}
        </div>
    )

}
export default Episodes