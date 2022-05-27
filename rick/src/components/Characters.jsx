import React, { useState, useEffect } from 'react'
import Pagination from './Pagination/Pagination';
import CardCharacter from './Card/CardCharacter/CardCharacter';
import Characterspage from '../styles/scss/Characterspage.module.scss';
import NavBar from "./NavBar/Navbar"

function Characters() {
    const [card, setCard] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(8);
    const [search, setSearch] = useState("");

    useEffect(() => {
        (async () => {
            setLoading(true);
            const res = await fetch("https://rickandmortyapi.com/api/character");
            const characters = await res.json();
            setCard(characters.results);
            setLoading(false);
        })()
    }, []);

    const indexOfLastPost = currentPage * cardsPerPage;
    const indexOfFirstPost = indexOfLastPost - cardsPerPage;
    const currentCards = card.slice(indexOfFirstPost, indexOfLastPost).filter(character => character.name.toLowerCase().includes(search.toLowerCase()));

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);



    return (
        <>
            <NavBar />
        <div className={Characterspage.characters}>
                <div className={Characterspage.titleContainer}>

            <h1 className={Characterspage.characterstitle}>Characters</h1>
                </div>
                <div className={Characterspage.searchBar}>
                <input
                        type="text"
                        className={Characterspage.inputCharacter}
                        placeholder="Find your favorites rick and morty characters"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
                <div className={Characterspage.cardsOfCharacters}>
                    <CardCharacter characters={currentCards} loading={loading} />
                </div>


            </div>
            <div className={Characterspage.container}>

                <Pagination
                    cards={card}
                    postsPerPage={cardsPerPage}
                    totalPosts={card.length}
                    paginate={paginate}
                />
            </div>
        </>
    )
}

export default Characters;