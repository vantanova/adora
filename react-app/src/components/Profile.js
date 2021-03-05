import React from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col, Input } from "antd";
import "./Styling/Profile.css";
// import Stickerbook from "./Stickerbook";

const { Meta } = Card;
const { TextArea } = Input;

function Profile() {
  const sessionUser = useSelector((state) => state.session.user);
  // const [visibleBook, setVisibleBook] = useState(null);

  // function setBook() {
  //   if (visibleBook == null) {
  //     setVisibleBook(<Stickerbook></Stickerbook>);
  //   } else {
  //     setVisibleBook(null);
  //   }
  // }

  return (
    <Card className="main_profile_content">
      <Row>
        <Col span={8}>
          <Card
            className="profile_card"
            cover={<img alt="example" src={sessionUser.photoUrl} />}
          >
            <Meta title={<h3>{sessionUser.username}</h3>} />
          </Card>
        </Col>
        <Col className="about">
          <h3>About me</h3>
          <TextArea showCount maxLength="500" className="textarea"></TextArea>
          {/* <p>{sessionUser.bio}</p> */}
        </Col>
      </Row>
      {/* <Row>
        <Col span={4}>
          <div className="flex">
            <Tooltip title="My Stickers" placement="bottom">
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
            <Tooltip title="My Likes" placement="bottom">
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
        <Col span={20} style={{ width: "100%", height: "50vh" }}>
          {visibleBook}
        </Col>
      </Row> */}
    </Card>
  );
}

export default Profile;
