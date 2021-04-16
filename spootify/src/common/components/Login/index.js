import React from "react";
import { loginUrl } from "../../../spotify";

export const Login = () => {
  return (
    <>
      <div>login</div>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </>
  );
};
export default Login;
