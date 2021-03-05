import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "antd";
import "./Styling/Profile.css";

function Profile() {
  const sessionUser = useSelector((state) => state.session.user);
  console.log(sessionUser);
  return (
    <Card className="main_profile_content">
      <h1>HI</h1>
    </Card>
  );
}

export default Profile;
