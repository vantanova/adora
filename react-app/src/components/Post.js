import React from "react";
import "antd/dist/antd.css";
import "./Styling/Home.css";
import { Card } from "antd";

const Post = () => {
  const cardTitle = (
    <div>
      <h3>My post</h3>
      <p>Hi</p>
    </div>
  );

  return (
    <div>
      <Card title={cardTitle} style={{ width: "50vh" }} className="post"></Card>
    </div>
  );
};

export default Post;
