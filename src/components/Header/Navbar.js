import "./Navbar.css";
import Logo from "./logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

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
            <a href="#goto">HOME</a>
          </li>
          <li>
            {/* <div class="dropdown">
              <button class="dropbtn">CATEGORIES ▾</button>
              <div class="dropdown-content">
                <Link>All Category</Link>
                <Link>Man's clothing</Link>
                <Link>Woman's clothing</Link>
                <Link>Jewelery</Link>
                <Link>electronics item</Link>
              </div>
            </div> */}
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
