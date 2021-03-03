import React, { useState } from "react";
import "antd/dist/antd.css";
import { Popover, Tag } from "antd";
import "./Styling/Stickerbook.css";

function Sticker({ sticker }) {
  const content = (
    <div>
      <p>{sticker.description}</p>
      <p>
        Rarity: <Tag color="geekblue">Common</Tag>
      </p>
    </div>
  );

  return (
    sticker && (
      <Popover content={content} title={sticker.title} trigger="hover">
        <button className="sticker_button">
          <img className="sticker" src={sticker.photoUrl}></img>
        </button>
      </Popover>
    )
  );
}

export default Sticker;
