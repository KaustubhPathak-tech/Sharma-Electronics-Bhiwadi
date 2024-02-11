import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Widget = () => {
  return (
    <div>
      <a href="tel:+91-8708583696">
        <div
          className="mywidgets"
          style={{
            position: "fixed",
            left: "0px",
            top: "80vh",
            zIndex: "100",
            border: "1px solid #000",
            padding: "10px",
            background: "#fff",
            color: "green",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faPhone} style={{ color: "black" }} />
        </div>
      </a>
    </div>
  );
};

export default Widget;
