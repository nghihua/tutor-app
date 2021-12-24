import VolunteerList from "./VolunteerList";
import CookieConsent from 'react-cookie-consent';

const Volunteers = () => {
  const volunteers = [
    {
      "email": "xxxx1@student.vgu.edu.vn",
      "fullName": "Nguyen Van A",
      "major": "CSE",
      "intake": "2019",
      "subject": "Math, C Programming",
    },
    {
      "email": "xxxx2@student.vgu.edu.vn",
      "fullName": "Le Anh B",
      "major": "MEN",
      "intake": "2018",
      "subject": "German",
    },
    {
      "email": "xxxx3@student.vgu.edu.vn",
      "fullName": "Pham Thi C",
      "major": "ECE",
      "intake": "2020",
      "subject": "Explore Engineering",
    }
  ];

  return (
      <div className="volunteers">
        <VolunteerList volunteers={volunteers} />
        <CookieConsent
          debug={true}
          style={{background: 'black', textAlign: "center", size:"50px"}}
          buttonStyle={{color: 'black', background:"white"}}
          buttonText={"Skip!"}
          expires={365}>
          Do you want to become a tutor? Register <a href="/profile">here</a>.
        </CookieConsent>
          </div>
  );
}

export default Volunteers;