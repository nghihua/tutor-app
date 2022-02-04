import { Link, useSearchParams } from "react-router-dom";

const Pagination = ({ postPerPage, totalPosts }) => {
  const [search] = useSearchParams();

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">
      <nav>
        <div className="pagination">
          {/* <li class="page-item"><a class="page-link" href="#" onClick={() => prepaginate(i)}>Previous</a></li> */}
          {pageNumbers.map((number) => {
            search.set("page", number);
            return (
              <li key={number}>
                <Link to={{ search: search.toString() }} className="page-link">
                  {number}
                </Link>
              </li>
            );
          })}
          {/* <li class="page-item"><a class="page-link" href="#" onClick={() => nextpaginate(i)}>Next</a></li> */}
        </div>
      </nav>
    </div>
  );
};

export { Pagination };
