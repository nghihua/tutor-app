import { Fragment } from "react";
import VolunteerList from "./VolunteerList";
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

  return (
    <Fragment>
        <div className="volunteers">
          <div className="center">
            <button type="button" data-toggle="modal" data-target="#exampleModal">
              Do you want to be a volunteer?
            </button>
          </div>
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Do you want to be a volunteer?</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Yes</button>
                </div>
              </div>
            </div>
          </div>
          <VolunteerList volunteers={volunteers}/>
        </div>
        <footer>
               <p class="d-flex justify-content-center footer footer1 font-weight-bold navbar-fixed-bottom ">@tutor2021</p> 
        </footer>
    </Fragment>
  );
}

export default Volunteers;