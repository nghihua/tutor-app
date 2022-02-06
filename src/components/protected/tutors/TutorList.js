import { useState, useEffect, useCallback } from "react";
import ReactPaginate from "react-paginate";
import { TutorPreview } from "components";

const tutorsPerPage = 3;

const TutorList = ({ tutors }) => {
  const [ctutors, setCtutors] = useState([]);

  const pageCount = Math.ceil(tutors.length / tutorsPerPage);

  const fetchTutors = useCallback(
    (currentPage) => {
      // Get current tutors
      const lastIndex = currentPage * tutorsPerPage;
      const firstIndex = lastIndex - tutorsPerPage;
      const currentTutors = tutors.slice(firstIndex, lastIndex);
      return currentTutors;
    },
    [tutors]
  );

  useEffect(() => {
    const tutorsFormServer = fetchTutors(1);
    setCtutors(tutorsFormServer);
  }, [fetchTutors]);

  const handlePageClick = (data) => {
    let currentPage = data.selected + 1;

    const tutorsFormServer = fetchTutors(currentPage);
    setCtutors(tutorsFormServer);
  };

  return (
    <div className="tutor-list">
      <div className="center">
        {ctutors.map((user) => (
          <TutorPreview user={user} key={user.user_id} />
        ))}
      </div>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
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
