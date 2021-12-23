import VolunteerList from "./VolunteerList";
import { useHistory } from "react-router-dom";
import ProfileEdit from "./ProfileEdit"

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

  const history = useHistory();

  const routeChange = () => {
    let path = `profile`;
    history.push(path);
  }

  return (
      <div className="volunteers">
        <div className="center">
          <button type="button" data-toggle="modal" data-target="#exampleModal">
            Do you want to be a volunteer?
          </button>
        </div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Do you want to be a volunteer?</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={routeChange}>Yes</button>
              </div>
            </div>
          </div>
        </div>
        <VolunteerList volunteers={volunteers} />
      </div>
  );
}

export default Volunteers;