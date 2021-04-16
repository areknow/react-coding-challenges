import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../context/Theme";
import "./_styles.scss";

export const Nav = () => {
  const { toggleDarkMode, darkMode } = useThemeContext();

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
          <FontAwesomeIcon
            color={darkMode ? "#FFA500" : "#ff"}
            icon={darkMode ? faMoon : faSun}
          />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
