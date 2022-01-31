import { useState, useEffect, useCallback } from "react";
import ReactPaginate from "react-paginate";
import { VolunteerPreview } from "components";

const volunteersPerPage = 3;

const VolunteerList = ({ volunteers }) => {
  const [cvolunteers, setCvolunteers] = useState([]);

  const pageCount = Math.ceil(volunteers.length / volunteersPerPage);

  const fetchVolunteers = useCallback(
    (currentPage) => {
      // Get current volunteers
      const lastIndex = currentPage * volunteersPerPage;
      const firstIndex = lastIndex - volunteersPerPage;
      const currentVolunteers = volunteers.slice(firstIndex, lastIndex);
      return currentVolunteers;
    },
    [volunteers]
  );

  useEffect(() => {
    const volunteersFormServer = fetchVolunteers(1);
    setCvolunteers(volunteersFormServer);
  }, [fetchVolunteers]);

  const handlePageClick = (data) => {
    let currentPage = data.selected + 1;

    const volunteersFormServer = fetchVolunteers(currentPage);
    setCvolunteers(volunteersFormServer);
  };

  return (
    <div className="volunteer-list">
      <div className="center">
        {cvolunteers.map((user) => (
          <VolunteerPreview user={user} key={user.user_id} />
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

export { VolunteerList };
