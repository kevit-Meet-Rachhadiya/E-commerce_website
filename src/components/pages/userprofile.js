import React from "react";
import "./userprofile.css";

const UserProfile = (props) => {
  const { firstName, lastName, email, password } = props;

  return (
    <div className="card">
      <div className="avatar-container">
        <img
          src="https://tinypic.host/images/2022/12/19/img_avatar.png"
          alt="avatar"
          className="avatar"
        />
      </div>
      <div className="user-info">
        <h2>User Profile</h2>
        <p>
          <strong>First Name:</strong> {firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {lastName}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Password:</strong> {password}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
