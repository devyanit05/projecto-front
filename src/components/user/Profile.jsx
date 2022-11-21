import React from "react";
import "./profile.css";
import profile from "../../assets/profile.jpeg";
import Button from "@mui/material/Button";

const Profile = () => {
  return (
    <div className="profile__section">
      <div className="profile__container">
        <div className="left__profile">
          <h1>Profile -- </h1>
          <div className="left__box">
            <div className="profile__square">
              <div className="circle__profile">
                <img src={profile} alt="" />
              </div>
            </div>
            <h3>Devyani Thokal</h3>
          </div>
        </div>
        <div className="right__pofile">
          <div className="right__box">
            <div className="right__left">
              <ul>
                <li>
                  Name: <span>Devyani Thokal</span>
                </li>
                <li>
                  Registration No.: <span>12010709</span>
                </li>
                <li>
                  Email id: <span>devyani.thokal20@vit.edu</span>
                </li>
                <li>
                  Contact: <span>9359619652</span>
                </li>
                <li>
                  Address: <span>Murtizapur, 444107</span>
                </li>
              </ul>
            </div>
            <div className="right__right">
              <ul>
                <li>
                  Academic Year: <span>2022 - 23</span>
                </li>
                <li>
                  Branch: <span>EnTC</span>
                </li>
                <li>
                  Division: <span>D</span>
                </li>
                <li>
                  Semester: <span>5</span>
                </li>
                <li>
                  Roll no.: <span>30</span>
                </li>
              </ul>
              <Button variant="text" className="edit">
                edit
              </Button>
            </div>
          </div>

          <div className="save__btn">
            <Button variant="contained" component="label">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
