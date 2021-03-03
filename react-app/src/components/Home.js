import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { Menu } from "antd";
import "./authStyling/Navbar.css";
import "antd/dist/antd.css";
import "./Stickerbook";
import Stickerbook from "./Stickerbook";
import Post from "./Post";
import "./Styling/Home.css";

const Home = ({ setAuthenticated }) => {
  return (
    <div className="main_content">
      <h1>Home</h1>
      <Post></Post>
    </div>
  );
};

export default Home;
