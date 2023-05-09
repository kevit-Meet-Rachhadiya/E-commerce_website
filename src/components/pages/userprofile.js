import React, { useState } from "react";
import "./userprofile.css";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(localStorage.getItem("firstName"));
  const [lastName, setLastName] = useState(localStorage.getItem("lastName"));
  const [email, setEmail] = useState(localStorage.getItem("username"));
  const [password, setPassword] = useState(localStorage.getItem("password"));

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("username", email);
    localStorage.setItem("password", password);

    setIsEditing(false);
  };

  return (
    <div className="user-container">
      <div className="user-card">
        <div className="card">
          <div className="avatar-container">
            <img
              src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
              alt="avatar"
              className="avatar"
            />
          </div>

          <div className="user-info">
            <h2>𝐔𝐬𝐞𝐫 𝐏𝐫𝐨𝐟𝐢𝐥𝐞</h2>
            <div>
              {isEditing ? (
                <form>
                  <table>
                    <tr>
                      <td>First Name :</td>
                      <td>
                        <input
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Last Name :</td>
                      <td>
                        <input
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Password :</td>
                      <td>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </td>
                    </tr>
                  </table>
                  <button className="btn" onClick={handleSave}>
                    Save
                  </button>
                </form>
              ) : (
                <div>
                  <table>
                    <tr>
                      <td>First Name :</td>
                      <td>{firstName}</td>
                    </tr>
                    <tr>
                      <td>Last Name :</td>
                      <td>{lastName}</td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>{email}</td>
                    </tr>
                    <tr>
                      <td>Password :</td>
                      <td>{password}</td>
                    </tr>
                  </table>
                  <button className="btn" onClick={handleEdit}>
                    Edit Profile
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
