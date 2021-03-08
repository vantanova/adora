import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Row, Col } from "antd";
import "./Styling/Packs.css";
import "./Stickerpack";
import Stickerpack from "./Stickerpack";
import { getUserStickerpacks } from "../store/stickerpacks";

function Packs() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser.id;
  console.log(userId);

  useEffect(() => {
    dispatch(getUserStickerpacks(userId));
  }, [dispatch, userId]);
  const sessionPacks = useSelector((state) => state.stickerpacks.stickerpacks);

  if (sessionPacks) {
    console.log(sessionPacks.stickerpacks);
  }

  return (
    <div className="Packs">
      <Card className="main_profile_content">
        <Row>
          <Col span={24}>
            <h1 className="sticker_title">My Stickerpacks</h1>
            <hr></hr>
            <div className="stickerpacks_scroll">
              {sessionPacks &&
                sessionPacks.stickerpacks.map((stickerpack) => {
                  return <Stickerpack props={stickerpack}></Stickerpack>;
                })}
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default Packs;
