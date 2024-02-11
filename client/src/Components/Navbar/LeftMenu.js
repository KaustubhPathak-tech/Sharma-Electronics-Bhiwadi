import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const LeftMenu = ({ mode }) => {
  const itemList = [
    // { key: "1", label: "Home", link: "/" },
  ];

  return (
    <Menu mode={mode} style={{ width: "300px", fontWeight: "600" }}>
      {itemList.map(item => (
        <Menu.Item key={item.key}>
          <Link to={item.link}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default LeftMenu;
