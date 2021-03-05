import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import Post from "./Post";
import "./Styling/Home.css";
import { getAllPosts, setFile } from "../store/post";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const [allPostsArr, setAllPostsArr] = useState();
  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(setFile(null));
  }, [dispatch]);
  const allPosts = useSelector((state) => state.post.posts);

  useEffect(() => {
    if (allPosts) {
      setAllPostsArr(Object.values(allPosts));
    }
  }, [allPosts]);

  return (
    <div className="main_content">
      {allPostsArr &&
        allPostsArr.map((post) => {
          return <Post key={post.id} post={post}></Post>;
        })}
    </div>
  );
};

export default Home;
