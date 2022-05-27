import React from 'react';
import Characterspage from "../../styles/scss/Characterspage.module.scss"

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className={Characterspage.paginationNumbers}>
                {pageNumbers.map(number => (
                    <li key={number} className={Characterspage.paginationList}>
                        <div onClick={() => paginate(number)} className={Characterspage.numberOfPages} >
                            {number}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;