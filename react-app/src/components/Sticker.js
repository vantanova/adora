import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUserStickers, getUserStickers } from "../store/sticker";
import { getAllPosts } from "../store/post";
import { useHistory } from "react-router-dom";
import "antd/dist/antd.css";
import { Popover, Tag, Button, message } from "antd";
import "./Styling/Stickerbook.css";

function Sticker({ sticker }) {
  const history = useHistory();
  let check;
  const sessionUser = useSelector((state) => state.session.user);
  const currentPostId = useSelector((state) => state.post.currentPost);
  const postUserId = useSelector((state) => state.post.posts[currentPostId]);
  const dispatch = useDispatch();
  if (postUserId) {
    console.log(postUserId.ownerId);
    check = postUserId.ownerId;
  }

  async function removeSticker() {
    if (check === sessionUser.id) {
      message.warning("You can't sticker your own post silly!");
      return;
    }
    message.success("Sticker given to a great home!");
    await dispatch(removeUserStickers(sticker.id, currentPostId));
    await dispatch(getUserStickers(sessionUser.id));
    await dispatch(getAllPosts());
  }

  const useStickerContent = (
    <div>
      <p>{sticker.description}</p>
      <p>
        Rarity: <Tag color="geekblue">Common</Tag>
      </p>
      <Button
        block={true}
        onClick={removeSticker}
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
