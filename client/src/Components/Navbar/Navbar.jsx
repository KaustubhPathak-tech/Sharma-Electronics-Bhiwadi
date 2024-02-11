import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Layout, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";

import logo from "../../Assets/Images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  
  const showDrawer = () => {
    setVisible(!visible);
  };
  let { pathname: location } = useLocation();
  useEffect(() => {
    setVisible(false);
  }, [location]);

  return (
    <nav className="navbar">
      
      <Layout>
        <Layout.Header className="nav-header">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="logo" height="50px" />
            </div>
          </Link>
          <div className="navbar-menu">
            <div className="leftMenu">
              <LeftMenu mode={"horizontal"} />
            </div>
            <Button className="menuButton" type="text" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <div className="rightMenu">
              <RightMenu mode={"horizontal"} />
            </div>

            <Drawer
              title={"Brand Here"}
              placement="right"
              closable={true}
              onClose={showDrawer}
              open={visible}
              style={{ zIndex: 99999 }}
            >
              <LeftMenu mode={"inline"} />
              <RightMenu mode={"inline"} />
            </Drawer>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  );
};

export default Navbar;
