import React from "react";
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";
import { Button } from "antd";
import "antd/dist/antd.css";

const LogoutButton = ({ setAuthenticated }) => {
  const dispatch = useDispatch();

  const onLogout = async (e) => {
    return dispatch(logout());
  };

  return (
    <Button
      type="primary"
      onClick={onLogout}
      style={{ background: "#806854", borderColor: "#8d725c" }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
