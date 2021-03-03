import React, { useState, useEffect } from "react";
import { getUserStickers, editSticker } from "../store/sticker";
import { useSelector, useDispatch } from "react-redux";
import FlipPage from "react-flip-page";
import "./Styling/Stickerbook.css";
import Sticker from "./Sticker";

function Stickerbook() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser.id;

  useEffect(() => {
    dispatch(getUserStickers(userId));
    dispatch(editSticker());
  }, [dispatch]);

  const sessionStickers = useSelector((state) => state.sticker.sticker);
  if (sessionStickers) {
    console.log(sessionStickers.stickers);
  }

  const pages = [
    { title: "My Stickers", content: "Content content content" },
    { title: "Shape Stickers", content: "Content content content" },
    { title: "Summer Stickers", content: "Content content content" },
    { title: "Serious Stickers", content: "Content content content" },
  ];

  return (
    <div className="border">
      <div className="stickerbook">
        <div className="line"></div>
        <FlipPage
          flipOnTouchZone={4}
          className="book"
          disableSwipe
          flipOnTouch
          showTouchHint
          orientation="horizontal"
          width="800"
          pageBackground="#fffdf8"
        >
          {pages.map((page) => (
            <article className="article_style">
              <h1 className="book_title">{page.title}</h1>
              {sessionStickers &&
                sessionStickers.stickers.map((sticker) => (
                  <Sticker sticker={sticker}></Sticker>
                ))}
            </article>
          ))}
        </FlipPage>
      </div>
    </div>
  );
}

export default Stickerbook;
