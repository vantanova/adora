import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import "./Styling/Post.css";
import { Card, Avatar, Button, Collapse, Modal } from "antd";
import { currentPostId, addLike } from "../store/post";
import Stickerbook from "./Stickerbook";
import MiniStickebook from "./MiniStickerbook";
import MiniProfile from "./MiniProfile";
import { LikeTwoTone, BookTwoTone, DeleteOutlined } from "@ant-design/icons";

const { Panel } = Collapse;
const { Meta } = Card;

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  // const [likes, setLikes] = useState(
  //   useSelector((state) => state.post.posts[post.id].likes)
  // );

  const [visible, setVisible] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);

  const showProfile = () => {
    console.log("hit");
    setIsProfileModalVisible(true);
  };

  const showModal = () => {
    setIsModalVisible(true);
    dispatch(currentPostId(post.id));
  };

  const handleProfileCancel = () => {
    setIsProfileModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    dispatch(currentPostId(null));
  };

  function addALike() {
    // setLikes((likes) => (likes += 1));
    dispatch(addLike(post.id));
  }
  // useEffect(() => {
  // }, []);

  // const deletePost = (postId) => async (dispatch) => {
  //   // const res = await fetch(`/api/posts/${postId}`, {
  //   //   method: "DELETE",
  //   // });
  //   // const data = await res.json();
  //   console.log(postId);
  //   let data = "hi";
  //   return data;
  // };

  async function deletePost() {
    await fetch(`/api/posts/${post.id}`, {
      method: "DELETE",
    });
    // const data = await res.json();
    // console.log(post.id);
  }

  const footer = (
    <div className="footer">
      <p className="footer_text">Press on the edge of a page to turn pages!</p>
      <Button
        style={{ color: "#806854", borderColor: "#8d725c" }}
        onClick={handleCancel}
      >
        Close
      </Button>
    </div>
  );

  function showPostText() {
    if (visible === 0) {
      setVisible(1);
    } else {
      setVisible(0);
    }
  }

  const cardTitle = (
    <button onClick={showProfile} className="user_link">
      <Meta
        avatar={
          <Avatar
            src={post.owner.photoUrl}
            size={50}
            style={{ marginTop: "2px" }}
          />
        }
        title={post.title}
        description={<p className="description">{post.owner.username}</p>}
      />
    </button>
  );

  const likeActions = (
    <div className="like_actions">
      {/* <Button type="text">
        <DislikeTwoTone style={{ fontSize: "2vh" }} />
      </Button> */}
      {/* <h2 className="like_text">{likes}</h2> */}
      <Button type="text">
        <LikeTwoTone
          onClick={addALike}
          style={{ fontSize: "2vh", margin: "none" }}
        />
      </Button>
    </div>
  );

  const showText = (
    <div className="like_actions">
      <Button onClick={showPostText} type="text">
        <h4 style={{ color: "rgba(0, 0, 0, 0.80)" }}>Read Post</h4>
      </Button>
    </div>
  );

  function lastTab() {
    if (sessionUser && sessionUser.id === post.ownerId) {
      return (
        <Button type="text" onClick={deletePost}>
          <DeleteOutlined style={{ fontSize: "2vh", margin: "none" }} />
        </Button>
      );
    } else {
      return (
        <div className="like_actions">
          <Button type="text">
            <BookTwoTone
              twoToneColor="rgb(128, 104, 84)"
              style={{ fontSize: "2vh", margin: "none" }}
              onClick={showModal}
            />
          </Button>
          <Modal
            visible={isModalVisible}
            onCancel={handleCancel}
            closable={false}
            footer={footer}
            width={"90%"}
            bodyStyle={{ padding: "0", width: "800px", height: "500px" }}
            style={{
              marginTop: "-6vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stickerbook post={true}></Stickerbook>
          </Modal>
        </div>
      );
    }
  }

  return (
    post && (
      <div>
        <Card
          title={cardTitle}
          avatar={Avatar}
          style={{ width: "40rem", margin: "1rem" }}
          className="post"
          actions={[likeActions, showText, lastTab()]}
          extra={<MiniStickebook stickers={post.stickers}></MiniStickebook>}
        >
          <img className="post_image" alt="post" src={post.photoUrl}></img>
          <Collapse activeKey={visible} ghost>
            <Panel key="1" showArrow={false}>
              <p>{post.message}</p>
            </Panel>
          </Collapse>
        </Card>
        <Modal
          visible={isProfileModalVisible}
          onCancel={handleProfileCancel}
          footer={null}
          bodyStyle={{ padding: "0" }}
          width={"90vh"}
        >
          <MiniProfile profile={post}></MiniProfile>
        </Modal>
      </div>
    )
  );
};

export default Post;
