import React from "react";
import ReactDOM from "react-dom";
import Layout from "./common/container/layout";
import { ThemeProvider } from "./common/context/Theme";
import { App } from "./routes";
import "./styles/_main.scss";

ReactDOM.render(
  <ThemeProvider>
    <Layout>
      <App />
    </Layout>
  </ThemeProvider>,
  document.getElementById("root")
);
