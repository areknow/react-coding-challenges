import React from "react";
import { useThemeContext } from "../context/Theme";

export const Layout = ({ children }) => {
  const { darkMode } = useThemeContext();

  return <div className={darkMode ? "dark-mode" : null}>{children}</div>;
};

export default Layout;
