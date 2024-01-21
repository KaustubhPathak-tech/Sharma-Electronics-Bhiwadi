import React from "react";

import "./Footer.css";

const Footer = () => {
  var year = new Date().getFullYear();
  return (
    <div>
      <section class="footer" id="footer">
        <span class="copyright_and_signoff">
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
