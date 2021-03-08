import React, { useState } from "react";
import FlipPage from "react-flip-page";
import "./Styling/Stickerbook.css";
import Sticker from "./Sticker";
import { Button, Menu, Modal, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function Searchbar() {
  const [search, setSearch] = useState();
  const onSearch = (e) => setSearch(e.target.value);
  console.log(search);

  return (
    <div>
      <Input
        style={{ width: "30vh" }}
        prefix={<SearchOutlined style={{ color: "rgb(128, 104, 84)" }} />}
        placeholder="input search text"
        value={search}
        onChange={onSearch}
      />
    </div>
  );
}

export default Searchbar;
