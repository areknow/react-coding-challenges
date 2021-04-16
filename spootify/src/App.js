import React, { useEffect } from "react";
import Login from "./common/components/Login";
import { useSpotifyContext } from "./common/context/Spotify";
import Routes from "./routes";
import { getTokenFromUrl } from "./spotify";

export const App = () => {
  const { token, setToken } = useSpotifyContext();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
  }, [setToken]);

  return !token ? <Login /> : <Routes />;
};

export default App;
