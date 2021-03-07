import React, { useEffect } from "react";
import { getUserStickers, editSticker } from "../store/sticker";
import { useSelector, useDispatch } from "react-redux";
import FlipPage from "react-flip-page";
import "./Styling/Stickerbook.css";
import Sticker from "./Sticker";

function ProfileStickerbook(stickers) {
  const pages = [
    { title: "Stickers", content: "Content content content" },
    { title: "Stickers", content: "Content content content" },
    { title: "Stickers", content: "Content content content" },
    { title: "Stickers", content: "Content content content" },
  ];

  return (
    <div className="stickerbook">
      <div className="line"></div>
      <FlipPage
        flipOnTouchZone={4}
        className="book"
        disableSwipe
        flipOnTouch
        showTouchHint
        orientation="horizontal"
        responsive
        pageBackground="#fffdf8"
      >
        {pages.map((page, index) => (
          <article className="article_style" key={index}>
            <h1 className="book_title">{page.title}</h1>
            {stickers &&
              stickers.stickers.map((sticker, index) => (
                <Sticker key={index} sticker={sticker}></Sticker>
              ))}
          </article>
        ))}
      </FlipPage>
    </div>
  );
}

export default ProfileStickerbook;
