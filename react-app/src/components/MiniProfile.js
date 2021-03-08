import React from "react";
import { Card, Row, Col, Tabs } from "antd";
import "./Styling/MiniProfile.css";
import ProfileStickerbook from "./ProfileStickerbook";

import Avatar from "antd/lib/avatar/avatar";

const { TabPane } = Tabs;

function MiniProfile(post) {
  const userProfile = post.profile;

  function callback(key) {
    console.log(key);
  }

  return (
    post && (
      <Card className="post_profile_content">
        <Row>
          <Col span={5} className="mini_profile_card">
            <Card
              bordered={false}
              height={"5vh"}
              cover={
                // <img
                //   className="mini_profile_photo"
                //   alt="example"
                //   src={userProfile.owner.photoUrl}
                // />
                <Avatar
                  src={userProfile.owner.photoUrl}
                  className="mini_profile_photo"
                />
              }
            ></Card>
            {/* <p className="status">{userProfile.owner.status}</p> */}
          </Col>
          <Col className="about">
            <h3>About {userProfile.owner.username}</h3>
            <p>{userProfile.owner.bio}</p>
            <div className="profile_flex"></div>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ width: "100%", height: "47.5vh" }}>
            <Tabs defaultActiveKey="1" onChange={callback} type="card">
              <TabPane
                type="card"
                tab={`${userProfile.owner.username}'s Stickers`}
                key="1"
              >
                <div className="stickerbook_space">
                  <ProfileStickerbook
                    stickers={userProfile.owner.stickers}
                  ></ProfileStickerbook>
                </div>
              </TabPane>
              <TabPane tab={`${userProfile.owner.username}'s Likes`} key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane
                tab={`${userProfile.owner.username}'s Stickerpacks`}
                key="3"
              >
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Card>
    )
  );
}

export default MiniProfile;
