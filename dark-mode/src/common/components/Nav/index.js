import React from "react";
import { Link } from "react-router-dom";
import "./_styles.scss";

export const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
