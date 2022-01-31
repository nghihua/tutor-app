import { useFetch } from "hooks";
import { includeCredentials } from "util";
import { ErrorMessage, LoadingScreen, VolunteerList } from "components";

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

export { Volunteers };
