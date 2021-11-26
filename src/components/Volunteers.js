import useFetch from "./useFetch";
import VolunteerList from "./VolunteerList";

const Volunteers = () => {
  const { data: volunteers, isPending, error } = useFetch("http://localhost:8000/volunteers")

  return (
    <div className="volunteers">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {volunteers && <VolunteerList volunteers={volunteers} />}
    </div>
  );
}

export default Volunteers;