import React, { useState, useEffect } from "react";
import Pagination from "./Pagination/Pagination";
import Navbar from "./NavBar/Navbar";
import CardListLocation from "./Card/CardLocation/CardListLocation";
import Locationspage from "../styles/scss/Locationspage.module.scss"


function Location() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(8);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetch("https://rickandmortyapi.com/api/location");
      const locations = await res.json();
      setData(locations.results);
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
      <div className={Locationspage.locations}>
        <div className={Locationspage.containerLocation}>
          <h1 className={Locationspage.locationTitle}>Locations</h1>
        </div>
        <div className={Locationspage.locationSearch}>
          <input
            type="search"
            className={Locationspage.inputSearch}
            placeholder="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={Locationspage.locationCards}>
          <div className={Locationspage.container}>

            <CardListLocation locations={currentCards} loading={loading} />
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
    </div>
    </>
  );
}

export default Location;
