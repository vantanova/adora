import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { logout } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Button, Dropdown, Menu, Modal, message } from "antd";
import "antd/dist/antd.css";
import { MenuOutlined, PlusOutlined } from "@ant-design/icons";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const LogoutButton = () => {
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);

  const showSignUpModal = () => {
    setIsSignUpModalVisible(true);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleSignUpCancel = () => {
    setIsSignUpModalVisible(false);
  };

  const dispatch = useDispatch();

  const onLogout = async (e) => {
    message.success("Logged out!");
    await dispatch(logout());
    history.push("/");
  };

  const loggedIn = (
    <Menu>
      {sessionUser && <Menu.Item>{sessionUser.username}</Menu.Item>}
      <Menu.Item>
        <NavLink to="/profile" exact={true}>
          Profile
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <button
          style={{ background: "none", border: "none", marginLeft: "-5px" }}
          onClick={onLogout}
        >
          Logout
        </button>
      </Menu.Item>
    </Menu>
  );

  const signedOut = (
    <Menu>
      <Menu.Item key="2" style={{ border: "none" }}>
        <Button type="text" onClick={showModal}>
          Login
        </Button>
      </Menu.Item>
      <Menu.Item key="3" style={{ border: "none" }}>
        <Button type="text" onClick={showSignUpModal}>
          Sign Up
        </Button>
      </Menu.Item>
    </Menu>
  );
  const postActions = (
    <Menu>
      <Menu.Item key="2" style={{ border: "none" }}>
        <NavLink to="/create_post" exact={true} activeClassName="active">
          Create Post
        </NavLink>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      {sessionUser && (
        <Dropdown
          overlay={postActions}
          placement="bottomCenter"
          trigger="click"
        >
          <Button
            style={{
              color: "#8d725c",
              borderColor: "#8d725c",
              paddingRight: "0",
              paddingLeft: "10px",
              marginRight: "1vh",
            }}
          >
            <PlusOutlined />
          </Button>
        </Dropdown>
      )}
      <Dropdown overlay={sessionUser ? loggedIn : signedOut} trigger="click">
        <Button
          type="primary"
          style={{
            background: "#806854",
            borderColor: "#8d725c",
            paddingRight: "0",
            paddingLeft: "10px",
          }}
        >
          <MenuOutlined />
        </Button>
      </Dropdown>
      <Modal
        title="Login"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={{ padding: "0" }}
        footer={null}
      >
        <LoginForm></LoginForm>
        {sessionUser && (
          <div style={{ padding: "10vh" }}>
            <p>{`You are now logged in as ${sessionUser.username}!`}</p>
            <p>Click anywhere to exit!</p>
          </div>
        )}
      </Modal>
      <Modal
        title="Sign Up"
        visible={isSignUpModalVisible}
        onOk={handleOk}
        onCancel={handleSignUpCancel}
        bodyStyle={{ padding: "0" }}
        footer={null}
      >
        <SignUpForm></SignUpForm>
        {sessionUser && (
          <div style={{ padding: "10vh" }}>
            <p>{`You are now logged in as ${sessionUser.username}!`}</p>
            <p>Click anywhere to exit!</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default LogoutButton;
