import React from "react";
import Characterspage from "../../../styles/scss/Characterspage.module.scss";

function CardsCharacter({ characters, loading }) {
    if (loading) return <h3>Loading ...</h3>;
    return (
        <div className={Characterspage.container}>
            <div className={Characterspage.Cards}>
                {characters.map((character, index) => (
                    <div
                        key={character.id}
                        className={Characterspage.charactersCard}
                    >
                        <div
                            className={Characterspage.charactersInfo}>
                            <img
                                src={character.image}
                                alt={character.name}
                                className={Characterspage.charactersImages}
                            />
                            <div className={Characterspage.characterNSS}>
                                <div className={Characterspage.characterName}>
                                    {character.name}
                                </div>
                                <div className={Characterspage.characterStatus}>
                                    <div className={Characterspage.characterStatusAndSpecies}>
                                        {character.status}
                                    </div>
                                    <div>
                                        {character.species}
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardsCharacter;
