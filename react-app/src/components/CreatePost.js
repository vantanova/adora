import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import "./Styling/Post.css";
import { Card, Avatar, Button, Input, message } from "antd";
import Canvas from "./Canvas";
import { createPost } from "../store/post";
import { useHistory } from "react-router-dom";

const { Meta } = Card;
const { TextArea } = Input;

const CreatePost = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser.id;
  const sessionFile = useSelector((state) => state.post.file);
  const fileName = new Date();

  const onPostCreation = async (e) => {
    e.preventDefault();
    if (title === undefined) {
      message.error("Please enter a title!");
      return;
    }
    if (!sessionFile) {
      message.error("Please submit a drawing!");
      return;
    }
    if (desc === undefined) {
      message.error("Please enter a description!");
      return;
    }

    e.preventDefault();
    let data = new FormData();
    data.append("title", title);
    data.append("message", desc);
    data.append("user_file", sessionFile);
    data.append("uploadDate", new Date());
    data.append("ownerId", userId);
    data.append("uniqueName", fileName);

    dispatch(createPost(data)).then((res) => {
      if (res.id) {
        history.push("/");
      }
    });
  };

  return (
    <div>
      <form onSubmit={onPostCreation}>
        <Card
          title={
            <Meta
              avatar={
                <Avatar
                  src={sessionUser.photoUrl}
                  size="large"
                  style={{ marginTop: "2px" }}
                />
              }
              title={
                <Input
                  placeholder="Enter a title!"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></Input>
              }
              description={
                <p className="description" style={{ marginTop: "-5px" }}>
                  {sessionUser.username}
                </p>
              }
            />
          }
          avatar={Avatar}
          style={{
            width: "40rem",
            marginTop: "5rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className="post"
        >
          <Canvas></Canvas>
          <h3>Body</h3>
          <TextArea
            style={{ height: "15vh" }}
            placeholder="Enter a description for your awesome post!"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></TextArea>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                background: "#806854",
                borderColor: "#8d725c",
                marginTop: "1vh",
                width: "20vh",
              }}
            >
              Submit
            </Button>
          </div>
        </Card>
      </form>
    </div>
  );
};

export default CreatePost;
