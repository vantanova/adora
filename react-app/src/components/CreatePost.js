import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import "./Styling/Post.css";
import { Card, Avatar, Button, Collapse, Modal, Input } from "antd";
import { currentPostId, getAllPosts } from "../store/post";
import Stickerbook from "./Stickerbook";
import { LikeTwoTone, BookTwoTone } from "@ant-design/icons";
import Canvas from "./Canvas";
import { createPost } from "../store/post";
import { useHistory } from "react-router-dom";

const { Panel } = Collapse;
const { Meta } = Card;
const { TextArea } = Input;

const CreatePost = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [photoFile, setPhotoFile] = useState();
  const [message, setMessage] = useState();
  const [date, setDate] = useState();
  const [saveData, setSaveData] = useState();
  const [visible, setVisible] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser.id;
  const sessionFile = useSelector((state) => state.post.file);
  const fileName = new Date();

  const showModal = () => {
    setIsModalVisible(true);
    dispatch(currentPostId(1));
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    dispatch(currentPostId(null));
  };

  const onPostCreation = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("title", title);
    data.append("message", message);
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

  function showPostText() {
    if (visible === 0) {
      setVisible(1);
    } else {
      setVisible(0);
    }
  }

  const test = {
    ownerId: 1,
    title: "My first post",
    message: "This is a wondeful dog I drew!",
    uploadDate: "3/2/2021",
    owner: "John Doe",
    ProfilePhotoUrl:
      "https://www.google.com/search?q=profile+picture&sxsrf=ALeKk00LOvrtNMaC5LZcpRth-ZZETaZ5tA:1614751841186&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjYppOvu5PvAhWOuZ4KHSi-DLoQ_AUoAXoECCIQAw&biw=959&bih=959#imgrc=X9UVa0RvJlQphM",
    photoUrl:
      "https://assets-global.website-files.com/5e4319072e6fb910d3a508a6/5eb32d03692fe040d79f87db_situation.png",
  };

  const cardTitle = (
    <Meta
      avatar={
        <Avatar
          src={test.ProfilePhotoUrl}
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
      description={<p className="description">{test.owner}</p>}
    />
  );

  const likeActions = (
    <div className="like_actions">
      {/* <Button type="text">
        <DislikeTwoTone style={{ fontSize: "2vh" }} />
      </Button> */}
      <Button type="text">
        <LikeTwoTone style={{ fontSize: "2vh", margin: "none" }} />
      </Button>
    </div>
  );

  const showText = (
    <div className="like_actions">
      <Button onClick={showPostText} type="text">
        <h4 style={{ color: "rgba(0, 0, 0, 0.80)" }}>Read Post</h4>
      </Button>
    </div>
  );
  const showMySticker = (
    <div className="like_actions">
      <Button type="text">
        <BookTwoTone
          twoToneColor="rgb(128, 104, 84)"
          style={{ fontSize: "2vh", margin: "none" }}
          onClick={showModal}
        />
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
        <Stickerbook post={true}></Stickerbook>
      </Modal>
    </div>
  );

  return (
    <div>
      <form onSubmit={onPostCreation}>
        <Card
          title={cardTitle}
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
