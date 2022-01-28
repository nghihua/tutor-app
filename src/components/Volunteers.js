import { useFetch } from "../hooks/custom-hooks";
import { includeCredentials } from "../utils";
import ErrorMessage from "./ErrorMessage";
import LoadingScreen from "./LoadingScreen";
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
      {isLoading && <LoadingScreen />}
      {error && <ErrorMessage error={error} />}
      {tutors && <VolunteerList volunteers={tutors} />}
    </div>
  );
};

export default Volunteers;
