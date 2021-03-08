import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Popconfirm, Spin } from "antd";
import "./Styling/Packs.css";
import { LoadingOutlined } from "@ant-design/icons";
import {
  redeemUserStickerpacks,
  getUserStickerpacks,
} from "../store/stickerpacks";
import { getUserStickers } from "../store/sticker";
// import { useHistory } from "react-router-dom";

function Stickerpack(props) {
  // const history = useHistory();
  const stickerpack = props.props;
  const sessionUser = useSelector((state) => state.session.user);

  function wait(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Done waiting");
        resolve(ms);
      }, ms);
    });
  }

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
    const results = await dispatch(redeemUserStickerpacks(stickerpack.id));
    await wait(5000);
    await setSetIsLoading(
      <div className="results">
        <h1>You got {results.title}!</h1>
        <img className="sticker" alt="sticker" src={results.photoUrl}></img>
      </div>
    );
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    dispatch(getUserStickerpacks(stickerpack.id));
    setIsModalVisible(false);
  };

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
