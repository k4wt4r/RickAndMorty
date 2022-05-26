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
                        <a onClick={() => paginate(number)} href='!#' className={Characterspage.numberOfPages} >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;