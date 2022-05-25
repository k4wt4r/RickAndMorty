import React from 'react';


function Cardsfortest({ characters, loading }) {
    if (loading)
        return (<h3>Loading ...</h3>)
    return (
        <div>
            {
                characters.map((character => (
                    <div key={character.id}>
                        <div>
                            <img
                                src={character.image}
                                alt={character.name}
                            />
                        </div>
                        {character.name}
                    </div>
                ))
                )}
        </div>
    )
}

export default Cardsfortest;