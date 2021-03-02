import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { Menu } from "antd";
import "./authStyling/Navbar.css";
import "antd/dist/antd.css";

const NavBar = ({ setAuthenticated }) => {
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
        <Menu.Item key="2" style={{ border: "none" }}>
          <NavLink
            to="/login"
            exact={true}
            activeClassName="active"
            style={{ color: "#453823" }}
          >
            Login
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3" style={{ border: "none" }}>
          <NavLink
            to="/sign-up"
            exact={true}
            activeClassName="active"
            style={{ color: "#453823" }}
          >
            Sign Up
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4" style={{ border: "none" }}>
          <NavLink
            to="/users"
            exact={true}
            activeClassName="active"
            style={{ color: "#453823" }}
          >
            Users
          </NavLink>
        </Menu.Item>
        <Menu.Item key="5" style={{ border: "none", float: "right" }}>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </Menu.Item>
      </Menu>
    </nav>
  );
};

export default NavBar;
