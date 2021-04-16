import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "./common/context/Theme";
import { App } from "./routes";
import "./styles/_main.scss";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
