import React, { useState } from "react";
import "./login.css";
import "./Registration.css";
import { useNavigate } from "react-router-dom";

const RegistrationForm = ({ redirectToLogin }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/login");
  };

  const handleLoginClick = () => {
    redirectToLogin();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="registraion-container">
        <h1>𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐭𝐢𝐨𝐧 </h1>
        <label>
          𝐅𝐢𝐫𝐬𝐭 𝐍𝐚𝐦𝐞 :
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <br />
        <label>
          𝐋𝐚𝐬𝐭 𝐍𝐚𝐦𝐞 :
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </label>
        <br />
        <label>
          𝐄𝐦𝐚𝐢𝐥 :
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 :
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit">𝐒𝐮𝐛𝐦𝐢𝐭 »</button>
        <p>
          Already have an Account ? &nbsp;&nbsp;
          <span className="acc-link" onClick={handleLoginClick}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
