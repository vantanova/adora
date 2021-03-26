import React, { useEffect } from "react";
import { getUserStickers, editSticker } from "../store/sticker";
import { useSelector, useDispatch } from "react-redux";
import FlipPage from "react-flip-page";
import "./Styling/Stickerbook.css";
import Sticker from "./Sticker";

function Stickerbook() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  let userId;

  if (sessionUser) {
    userId = sessionUser.id;
  }

  useEffect(() => {
    dispatch(getUserStickers(userId));
    dispatch(editSticker());
  }, [userId, dispatch]);

  const sessionStickers = useSelector((state) => state.sticker.sticker);

  const pages = [
    { title: "My Stickers", content: "Content content content" },
    { title: "My Stickers", content: "Content content content" },
  ];

  return (
    sessionUser && (
      <div className="stickerbook">
        <div className="line"></div>
        <FlipPage
          flipOnTouchZone={4}
          className="book"
          disableSwipe
          flipOnTouch
          // showTouchHint
          orientation="horizontal"
          responsive
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
    )
  );
}

export default Stickerbook;
