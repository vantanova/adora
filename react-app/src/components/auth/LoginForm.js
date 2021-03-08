import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button, Input } from "antd";
import "../Styling/Form.css";

const LoginForm = () => {
  // const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  async function onLogin(e) {
    e.preventDefault();
    await dispatch(login({ email, password }));
    return <p>Hi</p>;
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (sessionUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login_content">
      <Card>
        <form onSubmit={onLogin}>
          <div>
            {/* {errors.map((error) => (
              <div>{error}</div>
            ))} */}
          </div>
          <div>
            <Input
              name="email"
              type="text"
              size="large"
              placeholder="Email"
              value={email}
              className="form_input"
              onChange={updateEmail}
            />
          </div>
          <div className="form_input">
            <Input
              name="password"
              type="password"
              size="large"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
            <div>
              <Button
                type="primary"
                block={true}
                htmlType="submit"
                className="form_input"
                size="large"
                style={{
                  background: "rgb(128, 104, 84)",
                  border: "rgb(141, 114, 92)",
                }}
              >
                Login
              </Button>
            </div>
            {/* <div className="redirect">
              <p style={{ margin: "0" }}>Don't have an account?</p>
              <Button type="text">Make one here!</Button>
            </div> */}
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;
