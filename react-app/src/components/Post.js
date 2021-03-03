import React, { useState } from "react";
import "antd/dist/antd.css";
import "./Styling/Post.css";
import { Card, Avatar, Button, Collapse, Modal } from "antd";
import Stickerbook from "./Stickerbook";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  LikeTwoTone,
  LikeOutlined,
  DislikeTwoTone,
  BookTwoTone,
} from "@ant-design/icons";

const { Panel } = Collapse;
const { Meta } = Card;

const Post = () => {
  const [visible, setVisible] = useState(0);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
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
      title={test.title}
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
      <Card
        title={cardTitle}
        avatar={Avatar}
        style={{ width: "35rem" }}
        className="post"
        actions={[likeActions, showText, showMySticker]}
      >
        <img className="post_image" src={test.photoUrl}></img>
        <Collapse activeKey={visible} ghost>
          <Panel key="1" showArrow={false}>
            <p>{test.message}</p>
          </Panel>
        </Collapse>
      </Card>
    </div>
  );
};

export default Post;
