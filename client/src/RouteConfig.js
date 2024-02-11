import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { WhatsAppOutlined } from "@ant-design/icons";
import Footer from "./Components/Footer/Footer";
import Home from "./Page/Home/Home";
import Contact from "./Page/Contact/Contact";
import Widget from "./Components/Widget";
const RouteConfig = () => {
  const WhatsAppComponent = ({ phoneNumber, message }) => {
    const handleClick = () => {
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
    };

    return (
      <button
        onClick={handleClick}
        style={{
          border: "none",
          background: "white",
          borderRadius: "5px",
          padding: "10px",
          cursor: "pointer",
          zIndex: "10",
        }}
      >
        <WhatsAppOutlined style={{ fontSize: "35px", color: "green", textShadow: "0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00, 0 0 50px #00ff00, 0 0 60px #00ff00, 0 0 70px #00ff00" }} />
      </button>
    );
  };
  return (
    <div>
      <style>
        {`
          #whatsapp {
            position: fixed;
            bottom: 20px;
            right: 20px;
          }
        `}
      </style>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Widget />
        <div id="whatsapp">
          <WhatsAppComponent
            phoneNumber="+918707887106"
            message="Hello, I am interested in your products."
          />
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default RouteConfig;
