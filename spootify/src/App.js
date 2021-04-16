import React, { useEffect, useState } from "react";
import Login from "./common/components/Login";
import Routes from "./routes";
import { getTokenFromUrl } from "./spotify";

export const App = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
  }, [token]);

  return !token ? <Login /> : <Routes />;
};

export default App;
