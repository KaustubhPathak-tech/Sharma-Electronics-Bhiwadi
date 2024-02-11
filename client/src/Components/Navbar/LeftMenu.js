import React from "react";
import { Link } from "react-router-dom";

import { Menu } from "antd";

const LeftMenu = ({ mode }) => {
  const itemList = [];

  return (
    <Menu mode={mode} style={{ width: "300px", fontWeight: "600" }}>
      {itemList.map((item) => (
        <Menu.Item key={item.key}>
          <Link to={item.link}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default LeftMenu;
