import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav } from "./common/components/Nav";
import { About } from "./routes/About";
import { Home } from "./routes/Home";
import "./styles/_app.scss";

export const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <div className="content">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
