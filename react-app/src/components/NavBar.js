import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { Button, Menu, Modal } from "antd";
import "./authStyling/Navbar.css";
import "../components/Stickerbook";
import "antd/dist/antd.css";
import Stickerbook from "../components/Stickerbook";

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);
  console.log(sessionUser);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const footer = (
    <div className="footer">
      <p className="footer_text">Press on the edge of a page to turn pages!</p>
      <Button
        style={{ color: "#806854", borderColor: "#8d725c" }}
        onClick={handleCancel}
      >
        Close
      </Button>
    </div>
  );

  return (
    <nav>
      <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="0" style={{ border: "none" }}>
          <NavLink
            to="/"
            exact={true}
            activeClassName="active"
            style={{ color: "#453823" }}
          >
            <h1 style={{ color: "#453823", margin: "0" }}>Adora</h1>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="1" style={{ border: "none" }}>
          <NavLink
            to="/"
            exact={true}
            activeClassName="active"
            style={{ color: "#453823" }}
          >
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4" style={{ border: "none" }}>
          <NavLink
            to="/profile"
            exact={true}
            activeClassName="active"
            style={{ color: "#453823" }}
          >
            Profile
          </NavLink>
        </Menu.Item>
        <Menu.Item key="7" style={{ border: "none", float: "right" }}>
          <LogoutButton />
        </Menu.Item>
        {sessionUser && (
          <Menu.Item key="5" style={{ border: "none", float: "right" }}>
            <Button
              style={{ color: "#806854", borderColor: "#8d725c" }}
              onClick={showModal}
            >
              Stickerbook
            </Button>
            <Modal
              visible={isModalVisible}
              onCancel={handleCancel}
              closable={false}
              footer={footer}
              width={"90%"}
              bodyStyle={{ padding: "0" }}
              style={{
                marginTop: "-6vh",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Stickerbook></Stickerbook>
            </Modal>
          </Menu.Item>
        )}
      </Menu>
    </nav>
  );
};

export default NavBar;
