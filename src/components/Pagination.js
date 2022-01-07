const Pagination = ({postPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }
    return ( 
        <div className="container ">
            <nav className="nav center-pagination">
                <ul className="pagination">
                    {/* <li class="page-item"><a class="page-link" href="#" onClick={() => prepaginate(i)}>Previous</a></li> */}
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <a onClick={() => paginate(number)} href="#" className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                    {/* <li class="page-item"><a class="page-link" href="#" onClick={() => nextpaginate(i)}>Next</a></li> */}
                </ul>
            </nav>
        </div>
     );
}
 
export default Pagination;