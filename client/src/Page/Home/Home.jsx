import React from "react";
import { Row, Col } from "antd";
import "./Home.css";

import lighting from "../../Assets/Images/lighting.png";
import cables from "../../Assets/Images/cables.png";
import switches from "../../Assets/Images/switches.png";
import fans from "../../Assets/Images/fans.png";

const Home = () => {
  const productList = [
    { image: lighting, name: "Lighting" },
    { image: cables, name: "Wires and Cables" },
    { image: switches, name: "Switches" },
    { image: fans, name: "Fans" },
  ];
  return (
    <div className="topspace">
      <div className="productList">
        {productList.map((product) => (
          <div className="product">
            <img src={product.image} alt="" />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
