import React from "react";
import "./Navbar.css";

import { Menu, Avatar, Button } from "antd";
import {
  UserOutlined,
  CodeOutlined,
  LogoutOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

const RightMenu = ({ mode }) => {
  return (
    <div id="rightMenu">
      <Button type="primary" icon={<DownloadOutlined />} data-toggle="tooltip" title="Download Catalogue" />
      <Button type="default" id="enqbtn" data-toggle="tooltip" title="Get Quotation">
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/registration-form-5228737-4379744.png?f=webp"
          height="30px"
          width="30px"
        />
      </Button>
    </div>
  );
};

export default RightMenu;
