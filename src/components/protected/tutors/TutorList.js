import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import { TutorPreview } from "components";

const tutorsPerPage = 3;

const TutorList = ({ tutors }) => {
  // Get current page from url search parameter
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = parseInt(searchParams.get("page")) || 1; // default to 1 if parsed to NaN
  const currentPage = Math.max(pageParam, 1); // default to 1 if negative

  const pageCount = Math.ceil(tutors.length / tutorsPerPage);

  const [currTutors, setCurrTutors] = useState([]);

  useEffect(() => {
    // Get current tutors
    const lastIndex = currentPage * tutorsPerPage;
    const firstIndex = lastIndex - tutorsPerPage;
    const currentTutors = tutors.slice(firstIndex, lastIndex);

    setCurrTutors(currentTutors);
  }, [tutors, currentPage]);

  const handlePageClick = ({ selected }) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", selected + 1);
    setSearchParams(newParams);
  };

  return (
    <div className="tutor-list">
      <div className="center">
        {currTutors.map((user) => (
          <TutorPreview user={user} key={user.user_id} />
        ))}
      </div>

      <ReactPaginate
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        forcePage={currentPage - 1}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
      />
    </div>
  );
};

// Youtube: https://youtu.be/kMuRr53RjcE

export { TutorList };
