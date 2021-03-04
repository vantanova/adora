import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { Menu } from "antd";
import "./authStyling/Navbar.css";
import "antd/dist/antd.css";
import "./Stickerbook";
import Stickerbook from "./Stickerbook";
import Post from "./Post";
import "./Styling/Home.css";
import { getAllPosts } from "../store/post";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  const allPosts = useSelector((state) => state.post.posts);
  if (allPosts) {
    console.log(allPosts.posts);
  }

  return (
    <div className="main_content">
      {allPosts &&
        allPosts.posts &&
        allPosts.posts.map((post) => {
          return <Post post={post}></Post>;
        })}
    </div>
  );
};

export default Home;
