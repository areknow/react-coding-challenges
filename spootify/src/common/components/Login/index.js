import React from "react";
import { loginUrl } from "../../../spotify";
import { ReactComponent as Logo } from "./logo.svg";
import "./_styles.scss";

export const Login = () => {
  return (
    <div className="login">
      <div className="content">
        <Logo />
        <a href={loginUrl}>AUTHORIZE</a>
      </div>
    </div>
  );
};
export default Login;
