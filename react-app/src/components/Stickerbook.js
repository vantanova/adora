import React, { useState } from "react";
import FlipPage from "react-flip-page";
import "./Styling/Stickerbook.css";

function Stickerbook(props) {
  const pages = [
    { title: "Food Stickers", content: "Content content content" },
    { title: "Shape Stickers", content: "Content content content" },
    { title: "Summer Stickers", content: "Content content content" },
    { title: "Serious Stickers", content: "Content content content" },
  ];

  return (
    <div className="stickerbook">
      <div className="line"></div>
      <FlipPage
        className="book"
        disableSwipe
        flipOnTouch
        showTouchHint
        orientation="horizontal"
        width="800"
        pageBackground="#fffdf8"
      >
        {pages.map((page) => (
          <article style={{ width: "300px ", padding: "10px 20px" }}>
            <h1>{page.title}</h1>
            <p>{page.content}</p>
          </article>
        ))}
      </FlipPage>
    </div>
  );
}

export default Stickerbook;
