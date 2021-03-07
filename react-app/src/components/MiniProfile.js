import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col, Input, Tooltip, Button } from "antd";
import "./Styling/MiniProfile.css";
import ProfileStickerbook from "./ProfileStickerbook";
import { BookTwoTone, LikeTwoTone } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";

const { Meta } = Card;
const { TextArea } = Input;

function MiniProfile(post) {
  console.log(post.profile);
  const userProfile = post.profile;

  const [visibleBook, setVisibleBook] = useState(
    <ProfileStickerbook
      stickers={userProfile.owner.stickers}
    ></ProfileStickerbook>
  );

  function setBook() {
    if (visibleBook == null) {
      setVisibleBook(
        <ProfileStickerbook
          stickers={userProfile.owner.stickers}
        ></ProfileStickerbook>
      );
    } else {
      setVisibleBook(null);
    }
  }

  return (
    post && (
      <Card className="post_profile_content">
        <Row>
          <Col span={8}>
            <Card
              className="mini_profile_card"
              cover={
                // <img
                //   className="mini_profile_photo"
                //   alt="example"
                //   src={userProfile.owner.photoUrl}
                // />
                <Avatar
                  shape="square"
                  src={userProfile.owner.photoUrl}
                  className="mini_profile_photo"
                />
              }
            >
              <Meta title={<h3>{userProfile.owner.username}</h3>} />
            </Card>
            {/* <p className="status">{userProfile.owner.status}</p> */}
          </Col>
          <Col className="about">
            <h3>About {userProfile.owner.username}</h3>
            <p>{userProfile.owner.bio}</p>
            <div className="profile_flex">
              <Tooltip
                title={`${userProfile.owner.username}'s Stickers`}
                placement="bottom"
              >
                <Button type="text" style={{ height: "10vh" }}>
                  <BookTwoTone
                    twoToneColor="rgb(128, 104, 84)"
                    style={{
                      fontSize: "6vh",
                      margin: "none",
                      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                    }}
                    onClick={setBook}
                  />
                </Button>
              </Tooltip>
              <Tooltip
                title={`${userProfile.owner.username}'s Likes`}
                placement="bottom"
              >
                <Button type="text" style={{ height: "10vh" }}>
                  <LikeTwoTone
                    // twoToneColor="#eb2f96"
                    style={{
                      fontSize: "6vh",
                      margin: "none",
                      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                    }}
                    onClick={setBook}
                  />
                </Button>
              </Tooltip>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ width: "100%", height: "47.5vh" }}>
            {visibleBook}
          </Col>
        </Row>
      </Card>
    )
  );
}

export default MiniProfile;
