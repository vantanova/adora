import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import Post from "./Post";
import "./Styling/Home.css";
import { getAllPosts, setFile } from "../store/post";
import { useDispatch, useSelector } from "react-redux";
import { Empty, Card } from "antd";

const Home = () => {
  const dispatch = useDispatch();
  const [allPostsArr, setAllPostsArr] = useState();
  // const [searchPostsArr, setSearchPostsArr] = useState();
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

  console.log(allPostsArr);

  if (allPostsArr && allPostsArr.length < 1) {
    return (
      <div className="main_content">
        <Card style={{ marginTop: "2vh" }}>
          <Empty description={<h3>Sorry no posts found!</h3>} />
        </Card>
      </div>
    );
  }

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
