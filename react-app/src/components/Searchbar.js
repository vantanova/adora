import React, { useState } from "react";
import FlipPage from "react-flip-page";
import "./Styling/Stickerbook.css";
import Sticker from "./Sticker";
import { Button, Menu, Modal, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function Searchbar() {
  const onSearch = (value) => console.log(value);

  return (
    <div>
      <Input
        style={{ width: "30vh" }}
        prefix={<SearchOutlined style={{ color: "rgb(128, 104, 84)" }} />}
        placeholder="input search text"
        onChange={onSearch}
      />
    </div>
  );
}

export default Searchbar;
