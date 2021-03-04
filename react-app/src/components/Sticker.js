import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUserStickers } from "../store/sticker";
import "antd/dist/antd.css";
import { Popover, Tag, Button, Popconfirm } from "antd";
import "./Styling/Stickerbook.css";
import { BookOutlined } from "@ant-design/icons";

function Sticker({ sticker }) {
  const currentPostId = useSelector((state) => state.post.currentPost);
  const dispatch = useDispatch();
  console.log(currentPostId);
  console.log(sticker.id);

  // function removeSticker() {
  //   dispatch(removeUserStickers(sticker.id, currentPostId));
  // }

  const useStickerContent = (
    <div>
      <p>{sticker.description}</p>
      <p>
        Rarity: <Tag color="geekblue">Common</Tag>
      </p>
      <Button
        block={true}
        // onClick={removeSticker}
        style={{ color: "#806854", borderColor: "#8d725c" }}
      >
        Use Sticker?
      </Button>
    </div>
  );

  const content = (
    <div>
      <p>{sticker.description}</p>
      <p>
        Rarity: <Tag color="geekblue">Common</Tag>
      </p>
    </div>
  );

  return (
    sticker &&
    (currentPostId ? (
      <Popover
        content={useStickerContent}
        title={sticker.title}
        trigger="hover"
        placement="bottom"
      >
        <button className="sticker_button" type="dashed" shape="round">
          <img className="sticker" src={sticker.photoUrl}></img>
        </button>
      </Popover>
    ) : (
      <Popover
        content={content}
        title={sticker.title}
        trigger="hover"
        placement="bottom"
      >
        <button className="sticker_button">
          <img className="sticker" src={sticker.photoUrl}></img>
        </button>
      </Popover>
    ))
  );
}

export default Sticker;
