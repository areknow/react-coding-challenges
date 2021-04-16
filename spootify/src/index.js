import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SpotifyProvider } from "./common/context/Spotify";
import "./styles/_main.scss";

ReactDOM.render(
  <React.StrictMode>
    <SpotifyProvider>
      <App />
    </SpotifyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
