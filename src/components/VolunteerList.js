import { useState } from "react";
import Pagination from "./Pagination";
import VolunteerPreview from "./VolunteerPreview";

const volunteersPerPage = 3;

const VolunteerList = ({ volunteers }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Get current volunteers
  const lastIndex = currentPage * volunteersPerPage;
  const firstIndex = lastIndex - volunteersPerPage;
  const currentVolunteers = volunteers.slice(firstIndex, lastIndex);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="volunteer-list">
      <div className="center">
        {currentVolunteers.map((user) => (
          <VolunteerPreview user={user} key={user.user_id} />
        ))}
      </div>

      <Pagination
        postPerPage={volunteersPerPage}
        totalPosts={volunteers.length}
        paginate={paginate}
      />
    </div>
  );
};

export default VolunteerList;
