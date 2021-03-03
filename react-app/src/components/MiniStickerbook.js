import React, { useState, useEffect } from "react";
import { getUserStickers } from "../store/sticker";
import { useSelector, useDispatch } from "react-redux";
import FlipPage from "react-flip-page";
import "./Styling/Stickerbook.css";
import Sticker from "./Sticker";

function MiniStickebook() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser.id;
  console.log(userId);

  //   useEffect(() => {
  //     dispatch(getUserStickers(userId));
  //   }, [dispatch]);

  const sessionStickers = useSelector((state) => state.sticker.sticker);
  if (sessionStickers) {
    console.log(sessionStickers.stickers);
  }

  return (
    <div className="MiniStickebook">
      <p>Hi</p>
    </div>
  );
}

export default MiniStickebook;
