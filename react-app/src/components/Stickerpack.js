import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Row, Col, Input, Modal, Popconfirm, message, Spin } from "antd";
import "./Styling/Packs.css";
import { LoadingOutlined } from "@ant-design/icons";
import { redeemUserStickerpacks } from "../store/stickerpacks";

const { Meta } = Card;
const { TextArea } = Input;

function Stickerpack(props) {
  console.log(props.props);
  const stickerpack = props.props;
  console.log(stickerpack.photoUrl);

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

  const showModal = () => {
    setIsModalVisible(true);
    setTimeout(() => {
      dispatch(redeemUserStickerpacks(stickerpack.id));
      setSetIsLoading(<p>Wow!</p>);
    }, 5000);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
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
