import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tooltip, Tag } from "antd";
import "./Styling/MiniStickerbook.css";

function MiniStickebook({ stickers }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser.id;
  // console.log(userId);
  // console.log(stickers);
  //   useEffect(() => {
  //     dispatch(getUserStickers(userId));
  //   }, [dispatch]);

  // const sessionStickers = useSelector((state) => state.sticker.sticker);
  // if (sessionStickers) {
  //   console.log(sessionStickers.stickers);
  // }

  return (
    <div className="MiniStickebook">
      {stickers &&
        stickers.map((sticker) => {
          return (
            <div>
              <Tooltip
                placement="bottom"
                color={"white"}
                title={
                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p style={{ color: "black" }}>{sticker.title}</p>
                    <img src={sticker.photoUrl} style={{ width: "20vh" }}></img>
                    <Tag style={{ marginLeft: "1vh" }} color="geekblue">
                      {sticker.rarity}
                    </Tag>
                  </div>
                }
              >
                <img src={sticker.photoUrl} className="mini_sticker"></img>
              </Tooltip>
              {/* <img src={sticker.photoUrl} className="mini_sticker"></img> */}
            </div>
          );
        })}
    </div>
  );
}

export default MiniStickebook;
