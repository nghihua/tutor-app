const Pagination = ({postPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }
    return ( 
        <div className="container">
            <nav>
                <div className="pagination">
                    {/* <li class="page-item"><a class="page-link" href="#" onClick={() => prepaginate(i)}>Previous</a></li> */}
                    {pageNumbers.map(number => (
                        <li key={number} >
                            <a onClick={() => paginate(number)} href="#" className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                    {/* <li class="page-item"><a class="page-link" href="#" onClick={() => nextpaginate(i)}>Next</a></li> */}
                </div>
            </nav>
        </div>
     );
}
 
export default Pagination;