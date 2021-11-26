import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import ProfileEdit from "./ProfileEdit";

const Profile = () => {
  const { id } = useParams();
  const { data: volunteer, error, isPending } = useFetch("http://localhost:8000/volunteers/" + id);

  const handleSave = (e, newProfile) => {
    e.preventDefault();

    fetch("http://localhost:8000/volunteers/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProfile)
    })
  }

  return (
    <div className="volunteer-profile">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {volunteer && <ProfileEdit current={volunteer} onSave={handleSave} />}
    </div>
  );
}

export default Profile;