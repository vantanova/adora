import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../store/session";
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
        <div>
          <Input
            placeholder="Username"
            type="text"
            size="large"
            name="username"
            onChange={updateUsername}
            value={username}
          ></Input>
        </div>
        <div>
          <Input
            placeholder="Email"
            type="text"
            size="large"
            name="email"
            onChange={updateEmail}
            value={email}
          ></Input>
        </div>
        <div>
          <Input
            placeholder="Password"
            type="password"
            size="large"
            name="password"
            onChange={updatePassword}
            value={password}
          ></Input>
        </div>
        <div>
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
        <Button type="submit">Sign Up</Button>
      </form>
    </Card>
  );
};

export default SignUpForm;
