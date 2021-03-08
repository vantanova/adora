import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Row, Col, Input, Tabs, Button, Avatar } from "antd";
import { photoUpload, restoreUser, changeBio } from "../store/session";
import "./Styling/Profile.css";
// import Stickerbook from "./Stickerbook";
import "./Styling/MiniProfile.css";
import Stickerbook from "./Stickerbook";
import ProfileStickerbook from "./ProfileStickerbook";
import { BookTwoTone, LikeTwoTone } from "@ant-design/icons";

const { Meta } = Card;
const { TextArea } = Input;
const { TabPane } = Tabs;

function Profile() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [photoFile, setPhotoFile] = useState();
  const [photo, setPhoto] = useState(sessionUser.photoUrl);
  const [bio, setBio] = useState();
  const [about, setAbout] = useState(sessionUser.bio);
  const [visibleBook, setVisibleBook] = useState(
    <Stickerbook stickers={sessionUser.stickers}></Stickerbook>
  );

  function handleUpload(e) {
    setPhotoFile(e.target.files[0]);
  }

  function submit(e) {
    e.preventDefault();
    if (photoFile) {
      dispatch(photoUpload(photoFile)).then((res) => {
        setPhoto(res.url);
        dispatch(restoreUser());
      });
    }
    if (bio) {
      dispatch(changeBio(bio)).then((res) => {
        setBio("");
        dispatch(restoreUser());
      });
    }
  }

  function setBook() {
    if (visibleBook == null) {
      setVisibleBook(<Stickerbook></Stickerbook>);
    } else {
      setVisibleBook(null);
    }
  }

  function callback(key) {
    console.log(key);
  }

  return (
    sessionUser && (
      <form encType="multipart/form-data" onSubmit={submit}>
        <Card className="main_profile_content">
          <h1>My Profile</h1>
          <hr></hr>
          <Row>
            <Col span={8}>
              <Card
                className="profile_card"
                bordered={false}
                cover={
                  <Avatar src={photo} className="profile_photo" />
                  // <img alt="example" src={sessionUser.photoUrl} />
                }
              >
                <Meta
                  title={
                    <form>
                      <input
                        type="file"
                        id="myuniqueid"
                        name="user_file"
                        onChange={handleUpload}
                      />
                      <label for="myuniqueid">Upload Photo</label>
                    </form>
                  }
                />
              </Card>
            </Col>
            <Col className="about">
              <h3>About me</h3>
              <TextArea
                placeholder={about}
                showCount
                maxLength="500"
                className="textarea"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              ></TextArea>
            </Col>
          </Row>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              background: "rgb(128, 104, 84)",
              borderColor: "rgb(141, 114, 92)",
              float: "right",
            }}
          >
            Submit changes
          </Button>
          {/* <Row>
          <Row>
          <Col span={24} style={{ width: "100%", height: "47.5vh" }}>
          <Tabs defaultActiveKey="1" onChange={callback} type="card">
          <TabPane
          type="card"
          tab={`${sessionUser.username}'s Stickers`}
          key="1"
          >
          <div className="stickerbook_space">
          <ProfileStickerbook
          stickers={sessionUser.stickers}
          ></ProfileStickerbook>
          </div>
          </TabPane>
          <TabPane tab={`${sessionUser.username}'s Likes`} key="2">
          Content of Tab Pane 2
          </TabPane>
          <TabPane tab={`${sessionUser.username}'s Stickerpacks`} key="3">
          Content of Tab Pane 3
          </TabPane>
          </Tabs>
          </Col>
          </Row>
        </Row> */}
        </Card>
      </form>
    )
  );
}

export default Profile;
