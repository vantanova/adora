import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Row, Col, Input } from "antd";
import "./Styling/Packs.css";

const { Meta } = Card;
const { TextArea } = Input;

function Stickerpack() {
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
    <div>
      <button className="test"></button>
    </div>
  );
}

export default Stickerpack;
