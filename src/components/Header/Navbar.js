import "./Navbar.css";
import Logo from "./logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faUser,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/eshop">
          <img className="logo" src={Logo} alt="Eshop Logo" />
        </Link>
      </div>

      <div className="navbar-menu">
        <ul className="navbar-links">
          <li>
            <Link to="/eshop">
              <FontAwesomeIcon className="cart-icon-size" icon={faHouse} />
            </Link>
          </li>
          <li>
            <Link>
              <FontAwesomeIcon className="cart-icon-size" icon={faUser} />
            </Link>
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
