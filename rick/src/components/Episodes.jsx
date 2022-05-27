import React, { useEffect, useState } from 'react';
import CardListEpisode from './Card/CardEpisode/CardListEpisode';
import Navbar from './NavBar/Navbar';
import Pagination from './Pagination/Pagination';
import Episodespage from "../styles/scss/Episodespage.module.scss"


function Episodes() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(8);
    const [search, setSearch] = useState("");

    useEffect(() => {
        (async () => {
            setLoading(true);

            const res = await fetch("https://rickandmortyapi.com/api/episode");
            const episodes = await res.json();
            setData(episodes.results);
            setLoading(false);
        })();
    }, []);

    const indexOfLastPost = currentPage * cardsPerPage;
    const indexOfFirstPost = indexOfLastPost - cardsPerPage;
    const currentCards = data.slice(indexOfFirstPost, indexOfLastPost).filter(character => character.name.toLowerCase().includes(search.toLowerCase()));

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <Navbar />
            <div className={Episodespage.episodes}>
                <div className={Episodespage.pageTitleEpisode}>
                    <h1 className={Episodespage.episodeTitle}>Episodes</h1>
                </div>
                <div className={Episodespage.search}>
                    <input
                        className={Episodespage.inputEpisode}
                        type="search"
                        placeholder="Search"
                        onChange={(event) => setSearch(event.target.value)}
                    />
                </div>
                <div className={Episodespage.episodesCard}>
                    <CardListEpisode episodes={currentCards} loading={loading} />
                </div>
            </div>
            <div>
                <Pagination
                    cards={data}
                    postsPerPage={cardsPerPage}
                    totalPosts={data.length}
                    paginate={paginate}
                />
            </div>
        </>
    )

}
export default Episodes