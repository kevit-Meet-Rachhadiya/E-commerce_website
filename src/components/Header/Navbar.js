import "./Navbar.css";
import Logo from "./logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faUser,
  faAddressCard,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleUserMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/eshop">
          <img className="logo" src={Logo} alt="Eshop Logo" />
        </Link>
      </div>

      <div className="navbar-menu">
        <ul className="navbar-links">
          <li className="dropdown">
            <div className="dropdown-toggle" onClick={handleUserMenuToggle}>
              <FontAwesomeIcon className="cart-icon-size" icon={faUser} />
            </div>
            <ul
              className={`dropdown-menu${isUserMenuOpen ? " open" : ""}`}
              onClick={() => setIsUserMenuOpen(false)}
            >
              <li>
                <Link to="/UserProfile">
                  <FontAwesomeIcon icon={faAddressCard} />
                  &nbsp; User Profile
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  &nbsp; Logout
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/cart">
              <FontAwesomeIcon
                className="cart-icon-size"
                icon={faCartArrowDown}
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
