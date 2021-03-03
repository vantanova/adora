import React, { useState } from "react";
import "./Styling/Stickerbook.css";

function Sticker({ sticker }) {
  const test = {
    id: 1,
    title: "Jupiter",
    description: "This is a cool sticker!",
    rarity: "common",
    photoUrl:
      "https://adorabucket.s3-us-west-1.amazonaws.com/image-from-rawpixel-id-2034668-png.png",
  };

  return (
    sticker && (
      <div>
        <img className="sticker" src={sticker.photoUrl}></img>
      </div>
    )
  );
}

export default Sticker;
