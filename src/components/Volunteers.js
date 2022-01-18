import { useFetch } from "../hooks/custom-hooks";
import { includeCredentials } from "../utils";
import PostSignUpModal from "./PostSignUpModal";
import VolunteerList from "./VolunteerList";

const Volunteers = () => {
  const {
    data: tutors,
    error,
    isLoading,
  } = useFetch("http://localhost:5000/api/user/tutors", includeCredentials, {
    asEffect: true,
    throwError: false,
  });

  return (
    <div className="volunteers">
      {isLoading && <h3>Loading...</h3>}
      {error && (
        <>
          <h4>An error has occurred</h4>
          <p>{error.message}</p>
        </>
      )}

      {tutors && <VolunteerList volunteers={tutors} />}

      {/* Modal  */}
      <PostSignUpModal />
    </div>
  );
};

export default Volunteers;
