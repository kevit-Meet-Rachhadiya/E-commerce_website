import React, { useState } from "react";
import "./login.css";
import RegistrationForm from "./Registaration";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      console.log("Logged in successfully");
      fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((json) => console.log(json)); // store the data from API here

      navigate("/eshop");
    } else {
      setError("*Invalid username or password");
    }
  };

  const handleCreateAccount = () => {
    setShowRegistrationForm(true);
  };

  const handleRedirectToLogin = () => {
    setShowRegistrationForm(false);
  };

  return (
    <div className="login-page">
      <div className="login-container ">
        {!showRegistrationForm && (
          <form onSubmit={handleLogin}>
            <h1>𝐋𝐨𝐠𝐢𝐧 </h1>
            <label>𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 :</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 :</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <div className="error">{error}</div>}
            <button type="submit" onClick={handleLogin}>
              𝐋𝐎𝐆𝐈𝐍 »
            </button>
            <p>
              Don't have an Account yet ? &nbsp;&nbsp;
              <span
                onClick={() => {
                  handleCreateAccount();
                }}
                className="acc-link"
              >
                Create an Account
              </span>
            </p>
          </form>
        )}

        {showRegistrationForm && (
          <RegistrationForm redirectToLogin={handleRedirectToLogin} />
        )}
      </div>{" "}
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import "./login.css";
// import RegistrationForm from "./Registaration";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showRegistrationForm, setShowRegistrationForm] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === "admin" && password === "password") {
//       console.log("Logged in successfully");
//       navigate("/eshop");
//     } else {
//       setError("*Invalid username or password");
//     }
//   };

//   const handleCreateAccount = () => {
//     setShowRegistrationForm(true);
//   };

//   const handleRedirectToLogin = () => {
//     setShowRegistrationForm(false);
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container ">
//         {!showRegistrationForm && (
//           <form onSubmit={handleLogin}>
//             <h1>𝐋𝐨𝐠𝐢𝐧 </h1>
//             <label>𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 :</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <label>𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 :</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {error && <div className="error">{error}</div>}
//             <button type="submit">𝐋𝐎𝐆𝐈𝐍 »</button>
//             <p>
//               Don't have an Account yet ? &nbsp;&nbsp;
//               <span
//                 onClick={() => {
//                   handleCreateAccount();
//                 }}
//                 className="acc-link"
//               >
//                 Create an Account
//               </span>
//             </p>
//           </form>
//         )}

//         {showRegistrationForm && (
//           <RegistrationForm redirectToLogin={handleRedirectToLogin} />
//         )}
//       </div>{" "}
//     </div>
//   );
// };

// export default Login;
