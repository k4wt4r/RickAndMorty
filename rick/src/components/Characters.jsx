import React, { useState, useEffect } from 'react'
import Pagination from './Pagination/Pagination';
import CardCharacter from './Card/CardCharacter/CardCharacter';
import Characterspage from '../styles/scss/Characterspage.module.scss'

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
        <div className={Characterspage.characters}>
            <h1 className={Characterspage.characterstitle}>Characters</h1>
            <div className={Characterspage.searchbar}>
                <input
                    type="search"
                    className={Characters.inputcharacter}
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className={Characterspage.pagination}>
                <CardCharacter characters={currentCards} loading={loading} />
                <Pagination
                    cards={card}
                    postsPerPage={cardsPerPage}
                    totalPosts={card.length}
                    paginate={paginate}
                />
            </div>

        </div>
    )
}

export default Characters;