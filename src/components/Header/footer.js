import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer-part">
      <div className="row">
        <div className="column">
          <h4>About Us</h4>

          <p>
            We are an e-commerce demo website, showcasing the latest trends in
            fashion and lifestyle products. Our mission is to provide our
            customers with the best shopping experience, from the comfort of
            their own homes.
          </p>
        </div>

        <div className="column">
          <h4>Quick Links</h4>

          <ul>
            <li>
              <Link className="underline">
                <FontAwesomeIcon icon={faAngleRight} />
                &nbsp;Subscription
              </Link>
            </li>
            <li>
              <Link className="underline">
                <FontAwesomeIcon icon={faAngleRight} />
                &nbsp;Contact Us
              </Link>
            </li>
            <li>
              <Link className="underline">
                <FontAwesomeIcon icon={faAngleRight} />
                &nbsp;Bug report
              </Link>
            </li>
          </ul>
        </div>

        <div className="column">
          <h4>Connect with Us</h4>

          <ul className="social-icons">
            <li>
              <Link>
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
            </li>

            <li>
              <Link>
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>

            <li>
              <Link>
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </li>

            <li>
              <Link>
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="copyright">
        &copy; {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
