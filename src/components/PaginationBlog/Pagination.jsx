import React from 'react'

const Pagination = ({postsPerPage,totalPages,paginate}) => {
    const pageNumbers = [];
    for ( let i = 1; i<= Math.ceil((totalPages.length /postsPerPage )); i++) {
        pageNumbers.push(i)
    }
    console.log(pageNumbers,'pageNumbers');
    return (
        <nav>
            <ul className="pagination">
                {
                    pageNumbers.map(pageNumber => {
                        return (
                            <li key={pageNumber} className="page-item">
                                <a onClick={() => paginate(pageNumber)} href="!#" className="page-link">{pageNumber}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Pagination
