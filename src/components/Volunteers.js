import VolunteerList from "./VolunteerList";

const Volunteers = () => {
  const volunteers = [
    {
      "email": "00001@student.vgu.edu.vn",
      "fullName": "Nguyen Van A",
      "major": "CSE",
      "intake": 2019,
      "subject": "Math, C Programming",
    },
    {
      "email": "00002@student.vgu.edu.vn",
      "fullName": "Le Anh B",
      "major": "MEN",
      "intake": 2018,
      "subject": "German",
    },
    {
      "email": "00003@student.vgu.edu.vn",
      "fullName": "Pham Thi C",
      "major": "ECE",
      "intake": 2020,
      "subject": "Explore Engineering",
    }
  ];

  return (
    <div className="volunteers">
      <VolunteerList volunteers={volunteers} />
    </div>
  );
}

export default Volunteers;