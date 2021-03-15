import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser, login } from "../../store/session";
import { Card, Button, Input } from "antd";
import "../Styling/Form.css";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const sessionUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    // let newErrors = [];
    if (password === repeatPassword) {
      dispatch(createUser({ username, email, password })).then(() => {
        setUsername("");
        setEmail("");
        setPassword("");
        setRepeatPassword("");
      });
      // .catch(async (res) => {
      //   const data = await res.json();
      //   if (data && data.errors) {
      //     newErrors = data.errors;
      //   }
      // });
    }
  };

  const loginAsDemo = async (e) => {
    await dispatch(login({ email: "demo@aa.io", password: "password" }));
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (sessionUser) {
    return <Redirect to="/" />;
  }

  return (
    <Card>
      <form onSubmit={onSignUp}>
        <div className="form_input">
          <Input
            placeholder="Username"
            type="text"
            size="large"
            name="username"
            onChange={updateUsername}
            value={username}
          ></Input>
        </div>
        <div className="form_input">
          <Input
            placeholder="Email"
            type="text"
            size="large"
            name="email"
            onChange={updateEmail}
            value={email}
          ></Input>
        </div>
        <div className="form_input">
          <Input
            placeholder="Password"
            type="password"
            size="large"
            name="password"
            onChange={updatePassword}
            value={password}
          ></Input>
        </div>
        <div className="form_input">
          <Input
            placeholder="Confirm Password"
            size="large"
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></Input>
        </div>
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
            Sign Up
          </Button>
        </div>
        <div>
          <Button
            type="primary"
            block={true}
            onClick={loginAsDemo}
            className="form_input"
            size="large"
            style={{
              background: "rgb(128, 104, 84)",
              border: "rgb(141, 114, 92)",
            }}
          >
            Try as Demo User
          </Button>
        </div>
      </form>
      {/* <div className="redirect">
        <p style={{ margin: "0" }}>Already have an account?</p>
        <Button type="text">Login here!</Button>
      </div> */}
    </Card>
  );
};

export default SignUpForm;
