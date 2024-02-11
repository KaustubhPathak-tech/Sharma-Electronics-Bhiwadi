import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faLocationDot ,faPhone} from '@fortawesome/free-solid-svg-icons';
import "./Footer.css";

const Footer = () => {
  var year = new Date().getFullYear();
  return (
    <div>
      

      <section className="footer" id="footer">
      <div className="footerContactDetails">
        <p>
          <FontAwesomeIcon icon={faLocationDot} />  Ram Chowk, Bhiwadi, Rajasthan, India
        </p>
        <p>
        <FontAwesomeIcon icon={faPhone} /> +91-8708583696
        </p>
        <p>
          <FontAwesomeIcon icon={faCertificate} />  GST No. 08CQTPP5362D1ZD 
        </p>
      </div>
        <span className="copyRight">
          &copy; {year} Sharma Electronics Bhiwadi | All Rights Reserved |
          Powered by Swift.AI
        </span>
        <span className="impLinks">
          <ul type="none" className="linkList">
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">SiteMap</a>
            </li>
          </ul>
        </span>
      </section>
    </div>
  );
};

export default Footer;
