import React from "react";
import "./userprofile.css";

const UserProfile = () => {
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const email = localStorage.getItem("username");
  const password = localStorage.getItem("password");

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
            <h2>User Profile</h2>
            <div>
              <table className="user-tabel">
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
              <button className="btn">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

// import React from "react";
// import "./userprofile.css";

// const UserProfile = (props) => {
//   const { firstName, lastName, email, password } = props;

//   return (
//     <div className="user-container">
//       <div className="user-card">
//         <div className="card">
//           <div className="avatar-container">
//             <img
//               src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
//               alt="avatar"
//               className="avatar"
//             />
//           </div>
//           <div className="user-info">
//             <h2>User Profile</h2>
//             <p>
//               <strong>First Name:</strong> {firstName}
//             </p>
//             <p>
//               <strong>Last Name:</strong> {lastName}
//             </p>
//             <p>
//               <strong>Email:</strong> {email}
//             </p>
//             <p>
//               <strong>Password:</strong> {password}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
