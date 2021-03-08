import React, { useState } from "react";
import FlipPage from "react-flip-page";
import "./Styling/Stickerbook.css";
import Sticker from "./Sticker";
import { Button, Menu, Modal, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { getPostsBySearch } from "../store/post";

function Searchbar() {
  const dispatch = useDispatch();
  let search;
  const onSearch = (e) => {
    search = e.target.value;
    dispatch(getPostsBySearch(search));
  };
  console.log(search);

  return (
    <div>
      <Input
        style={{ width: "30vh" }}
        prefix={<SearchOutlined style={{ color: "rgb(128, 104, 84)" }} />}
        placeholder="search by post"
        value={search}
        onChange={onSearch}
      />
    </div>
  );
}

export default Searchbar;
