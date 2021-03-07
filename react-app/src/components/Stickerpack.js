import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Row, Col, Input, Modal, Popconfirm, message, Spin } from "antd";
import "./Styling/Packs.css";
import { LoadingOutlined } from "@ant-design/icons";
import {
  redeemUserStickerpacks,
  getUserStickerpacks,
} from "../store/stickerpacks";
import { getUserStickers } from "../store/sticker";
import { useHistory } from "react-router-dom";

const { Meta } = Card;
const { TextArea } = Input;

function Stickerpack(props) {
  const history = useHistory();
  const stickerpack = props.props;
  const sessionUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setSetIsLoading] = useState(
    <div className="sticker_load">
      <Spin
        indicator={
          <LoadingOutlined
            style={{ fontSize: 300, color: "rgb(128, 104, 84)" }}
            spin
          />
        }
      />
      <h1 style={{ marginTop: "7vh" }}>Generating sticker...</h1>
    </div>
  );

  const showModal = async () => {
    setIsModalVisible(true);
    setTimeout(async () => {
      const results = await dispatch(redeemUserStickerpacks(stickerpack.id));
      await dispatch(getUserStickers(sessionUser.id));
      await console.log(results.photoUrl);
      setSetIsLoading(
        <div className="results">
          <h1>You got {results.title}!</h1>
          <img className="sticker" alt="sticker" src={results.photoUrl}></img>
        </div>
      );
    }, 5000);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    dispatch(getUserStickerpacks(stickerpack.id));
    setIsModalVisible(false);
  };

  function confirm(e) {
    console.log(e);
    message.success("Click on Yes");
  }

  return (
    <div>
      <Popconfirm
        title="Are you sure to open this pack?"
        onConfirm={showModal}
        okText="Yes"
        cancelText="No"
      >
        <button className="stickerpack">
          <svg width="30vh" height="40vh">
            <image
              href={stickerpack.photoUrl}
              width="30vh"
              height="40vh"
            ></image>
          </svg>
        </button>
      </Popconfirm>
      <Modal
        title={stickerpack.title}
        visible={isModalVisible}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {isLoading}
      </Modal>
    </div>
  );
}

export default Stickerpack;
