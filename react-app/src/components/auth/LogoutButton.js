import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Button, Dropdown, Menu } from "antd";
import "antd/dist/antd.css";
import { MenuOutlined } from "@ant-design/icons";

const LogoutButton = () => {
  const sessionUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();

  const onLogout = async (e) => {
    return dispatch(logout());
  };

  const loggedIn = (
    <Menu>
      <Menu.Item>
        <NavLink to="/profile" exact={true}>
          Profile
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <button
          style={{ background: "none", border: "none", marginLeft: "-5px" }}
          onClick={onLogout}
        >
          Logout
        </button>
      </Menu.Item>
    </Menu>
  );

  const signedOut = (
    <Menu>
      <Menu.Item key="2" style={{ border: "none" }}>
        <NavLink to="/login" exact={true} activeClassName="active">
          Login
        </NavLink>
      </Menu.Item>
      <Menu.Item key="3" style={{ border: "none" }}>
        <NavLink to="/sign-up" exact={true} activeClassName="active">
          Sign Up
        </NavLink>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={sessionUser ? loggedIn : signedOut} trigger="click">
      <Button
        type="primary"
        style={{
          background: "#806854",
          borderColor: "#8d725c",
          paddingRight: "0",
          paddingLeft: "10px",
        }}
      >
        <MenuOutlined />
      </Button>
    </Dropdown>
  );
};

export default LogoutButton;
