import React, { useState } from "react";
import "./login.css";
import RegistrationForm from "./Registaration";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "@mui/material/styles";
import { styled } from "@mui/material/styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const navigate = useNavigate();

  const myFunction = () => {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (username === storedUsername && password === storedPassword) {
      setShowSuccessDialog(true);
    } else {
      setError("*Invalid username or password");
    }
  };

  const SuccessDialog = styled(Dialog)({
    "& .success-dialog-title": {
      fontSize: "24px",
      fontWeight: "bold",
    },
    "& .success-dialog-message": {
      fontSize: "18px",
    },
    "& .success-dialog-action-button": {
      color: "#0072ff",
    },
  });

  const handleCreateAccount = () => {
    setShowRegistrationForm(true);
  };

  const handleRedirectToLogin = () => {
    setShowRegistrationForm(false);
  };

  const handleDialogClose = () => {
    setShowSuccessDialog(false);
    navigate("/eshop");
  };

  return (
    <div className="login-page">
      <div className="login-container ">
        {!showRegistrationForm && (
          <form onSubmit={handleLogin}>
            <h1>𝐋𝐨𝐠𝐢𝐧 </h1>
            <label> 𝐄𝐦𝐚𝐢𝐥 :</label>
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
              id="myInput"
            />
            <span>
              <input type="checkbox" onClick={myFunction} />
              &nbsp; Show Password
            </span>

            {error && <div className="error">{error}</div>}
            <Button type="submit" onClick={handleLogin} variant="contained">
              𝐋𝐎𝐆𝐈𝐍 »
            </Button>
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

        <SuccessDialog open={showSuccessDialog} onClose={handleDialogClose}>
          <DialogTitle className="success-dialog-title">
            {"Login Successful"}
          </DialogTitle>
          <DialogContent>
            <p className="success-dialog-message">
              Welcome{" "}
              {localStorage.getItem("firstName") +
                " " +
                localStorage.getItem("lastName")}{" "}
              ! You are logged in successfully.🥳
            </p>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleDialogClose}
              className="success-dialog-action-button"
              autoFocus
            >
              OK
            </Button>
          </DialogActions>
        </SuccessDialog>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import "./login.css";
// import RegistrationForm from "./Registaration";
// import { useNavigate } from "react-router-dom";
// import {
//   Button,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showRegistrationForm, setShowRegistrationForm] = useState(false);
//   const [openPopup, setOpenPopup] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const storedUsername = localStorage.getItem("username");
//     const storedPassword = localStorage.getItem("password");
//     if (username === storedUsername && password === storedPassword) {
//       const storedFirstName = localStorage.getItem("firstName");
//       const storedLastName = localStorage.getItem("lastName");
//       setOpenPopup(true);
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

//   const handleClosePopup = () => {
//     setOpenPopup(false);
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container ">
//         {!showRegistrationForm && (
//           <form onSubmit={handleLogin}>
//             <h1>𝐋𝐨𝐠𝐢𝐧 </h1>
//             <TextField
//               label="Email"
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               label="Password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               fullWidth
//               margin="normal"
//             />
//             {error && <div className="error">{error}</div>}
//             <Button variant="contained" type="submit" onClick={handleLogin}>
//               𝐋𝐎𝐆𝐈𝐍 »
//             </Button>
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

//         <Dialog open={openPopup} onClose={handleClosePopup}>
//           <DialogTitle>{"Login Successful"}</DialogTitle>
//           <DialogContent>
//             <p>
//               Welcome {localStorage.getItem("firstName")}{" "}
//               {localStorage.getItem("lastName")}! You are logged in
//               successfully.
//             </p>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClosePopup} autoFocus>
//               OK
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>{" "}
//     </div>
//   );
// };

// export default Login;

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
//     const storedUsername = localStorage.getItem("username");
//     const storedPassword = localStorage.getItem("password");
//     if (username === storedUsername && password === storedPassword) {
//       const storedFirstName = localStorage.getItem("firstName");
//       const storedLastName = localStorage.getItem("lastName");
//       alert(
//         `Welcome ${storedFirstName} ${storedLastName}! You are logged in successfully`
//       );
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
//             <label> 𝐄𝐦𝐚𝐢𝐥 :</label>
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
//             <button type="submit" onClick={handleLogin}>
//               𝐋𝐎𝐆𝐈𝐍 »
//             </button>
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
