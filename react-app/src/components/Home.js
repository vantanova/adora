import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { Menu } from "antd";
import "./authStyling/Navbar.css";
import "antd/dist/antd.css";
import "./Stickerbook";
import Stickerbook from "./Stickerbook";

const Home = ({ setAuthenticated }) => {
  return (
    <div>
      <Stickerbook></Stickerbook>
    </div>
  );
};

export default Home;
