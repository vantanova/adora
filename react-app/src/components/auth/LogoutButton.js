import React from "react";
import { logout } from "../../services/auth";
import { Button } from "antd";
import "antd/dist/antd.css";

const LogoutButton = ({ setAuthenticated }) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
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
