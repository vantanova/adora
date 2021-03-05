import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col } from "antd";
import "./Styling/Profile.css";

const { Meta } = Card;

function Profile() {
  const sessionUser = useSelector((state) => state.session.user);
  console.log(sessionUser);
  return (
    <Card className="main_profile_content">
      <Row>
        <Col span={8}>
          <Card
            className="profile_card"
            cover={<img alt="example" src={sessionUser.photoUrl} />}
          >
            <Meta title={sessionUser.username} />
          </Card>
        </Col>
        <Col>
          <h1>About me</h1>
        </Col>
      </Row>
    </Card>
  );
}

export default Profile;
