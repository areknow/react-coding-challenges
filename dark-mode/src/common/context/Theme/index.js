import { createContext, useContext, useState } from "react";

export const DEFAULT_STATE = {
  darkMode: false,
};

export const Context = createContext({
  context: DEFAULT_STATE,
  toggleDarkMode: () => null,
});

export const ThemeProvider = ({ children }) => {
  const [context, setContext] = useState(DEFAULT_STATE);

  const toggleDarkMode = () => {
    setContext({ darkMode: !context.darkMode });
  };

  return (
    <Context.Provider
      value={{ context, toggleDarkMode, darkMode: context.darkMode }}
    >
      {children}
    </Context.Provider>
  );
};

export const useThemeContext = () => useContext(Context);
