import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";
import VolunteerPreview from "./VolunteerPreview";

const volunteersPerPage = 3;

const VolunteerList = ({ volunteers }) => {
  // Get current page from url search parameter
  const [search] = useSearchParams();
  const pageParam = parseInt(search.get("page")) || 1; // default to 1 if parsed to NaN
  const currentPage = Math.max(pageParam, 1); // default to 1 if negative

  // Get current volunteers
  const lastIndex = currentPage * volunteersPerPage;
  const firstIndex = lastIndex - volunteersPerPage;
  const currentVolunteers = volunteers.slice(firstIndex, lastIndex);

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
      />
    </div>
  );
};

export default VolunteerList;
