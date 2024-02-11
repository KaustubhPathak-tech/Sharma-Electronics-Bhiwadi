import React from "react";

import "./Home.css";
import GlowingBulbsCanvas from "../../Components/GlowingBulbsCanvas";

//antd design
import { Row, Col } from "antd";

//images
import intro from "../../Assets/Images/Intro_img.png";
import lighting from "../../Assets/Images/lighting.png";
import cables from "../../Assets/Images/cables.png";
import switches from "../../Assets/Images/switches.png";
import fans from "../../Assets/Images/fans.png";

const Home = () => {
  const productList = [
    { key: "1", image: lighting, name: "Lighting" },
    { key: "2", image: cables, name: "Wires and Cables" },
    { key: "3", image: switches, name: "Switches" },
    { key: "4", image: fans, name: "Fans" },
  ];
  return (
    <div className="topspace">
      <Row className="intro">
        <Col xs={24} sm={14}>
          <img src={intro} alt="intro_img" id="intro_img" />
        </Col>
        <Col xs={24} sm={10} className="intro_description">
          <div className="upper">
            <p>
              Your All{" "}
              <span
                style={{
                  fontWeight: "600",
                  backgroundImage: "linear-gradient(to right, red, blue)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Electrical & Electronics
              </span>{" "}
              Requirements
            </p>
          </div>
          <div className="lower">
            <p>
              One <span style={{ color: "red", fontWeight: "600" }}>Stop</span>{" "}
              Destination
            </p>
            <span id="canvasbulbs">
              <GlowingBulbsCanvas />
            </span>
          </div>
        </Col>
      </Row>

      <div className="productList">
        {productList.map((product) => (
          <div className="product" key={product.key}>
            <img src={product.image} alt="" />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
