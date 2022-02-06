import { useFetch } from "hooks";
import { includeCredentials } from "app-util";
import { ErrorMessage, LoadingScreen, TutorList } from "components";

const Tutors = () => {
  const {
    data: tutors,
    error,
    isLoading,
  } = useFetch("http://localhost:5000/api/user/tutors", includeCredentials, {
    asEffect: true,
    throwError: false,
  });

  return (
    <div className="tutors">
      {isLoading && <LoadingScreen />}
      {error && <ErrorMessage error={error} />}
      {tutors && <TutorList tutors={tutors} />}
    </div>
  );
};

export { Tutors };
