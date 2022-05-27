import React from "react";
import Characterspage from "../../../styles/scss/Characterspage.module.scss";
import Separator from "../../Sep/Separator";
import { FaBookDead } from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/bs";

function CardsCharacter({ characters, loading }) {
    if (loading) return <h3>Loading ...</h3>;
    return (
        <div className={Characterspage.container}>
            <div className={Characterspage.Cards}>
                {characters.map((character, index) => (
                    <div key={character.id} className={Characterspage.charactersCard}>
                        <div className={Characterspage.charactersInfo}>
                            <img
                                src={character.image}
                                alt={character.name}
                                className={Characterspage.charactersImages}
                            />
                            <div className={Characterspage.characterNSS}>
                                <div className={Characterspage.characterName}>
                                    {character.name}
                                    <Separator />
                                </div>
                                <div className={Characterspage.characterStatus}>
                                    <div className={Characterspage.characterStatusAndSpecies}>
                                        <div className={Characterspage.characterStatusIcon}>
                                            {character.status !== "Alive" ? (<i className={Characterspage.deadIcon}>
                                                <FaBookDead className={Characterspage.characterStatusIconDead} />
                                            </i>) : (<i className={Characterspage.aliveIcon}>
                                                <BsFillCircleFill className={Characterspage.characterStatusIconAlive} />
                                            </i>)}

                                            {character.status} 


                                        </div>

                                    </div>
                                    <div>{character.species}</div>
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
