import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../context/Theme";
import "./_styles.scss";

export const Nav = () => {
  const { toggleDarkMode } = useThemeContext();

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="dark-mode-toggle">
        <button onClick={() => toggleDarkMode()}>
          <FontAwesomeIcon icon={faMoon} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
