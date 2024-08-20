import React from "react";
import "./profiles.scss";

import person1 from "../../../assets/image/person1.png";
import person2 from "../../../assets/image/person2.png";
import person3 from "../../../assets/image/person3.png";
import person4 from "../../../assets/image/person4.png";
import person5 from "../../../assets/image/person5.png";

export default function Profiles() {
  return (
    <div>
      <div className="profile">
        <div className="profile-container">
          <div className="profile-div">
            <div className="profile-image-div">
              <img src={person1} alt="person1" />
              <div className="upper-div">
                <div className="name-div">
                  <h1>ayleen lauerwald</h1>
                </div>
                <p>
                  Communication & Public Relations <br /> Founding Team
                </p>
              </div>
            </div>
            <div className="profile-image-div">
              <img src={person2} alt="person2" />
              <div className="upper-div">
                <div className="name-div">
                  <h1>darjusch kreuteler</h1>
                </div>
                <p>
                  Sales Management <br /> Founding Team
                </p>
              </div>
            </div>
            <div className="profile-image-div">
              <img src={person3} alt="person3" />
              <div className="upper-div">
                <div className="name-div">
                  <h1>MARIAN-NOÉL ECKARDT</h1>
                </div>
                <p>
                  CEO <br /> Founding
                </p>
              </div>
            </div>
            <div className="profile-image-div">
              <img src={person4} alt="person4" />
              <div className="upper-div">
                <div className="name-div">
                  <h1>nils horn</h1>
                </div>
                <p>
                  Project Manager JESAM <br /> Management IT
                </p>
              </div>
            </div>
            <div className="profile-image-div">
              <img src={person5} alt="person5" />
              <div className="upper-div">
                <div className="name-div">
                  <h1>samuel rauwald</h1>
                </div>
                <p>
                  CTO & Marketing<br /> Founding Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
