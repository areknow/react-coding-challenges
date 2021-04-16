import { createContext, useContext, useState } from "react";

export const DEFAULT_STATE = {
  token: "",
};

export const Context = createContext({
  context: DEFAULT_STATE,
  setToken: () => null,
});

export const SpotifyProvider = ({ children }) => {
  const [context, setContext] = useState(DEFAULT_STATE);

  const setToken = (value) => {
    setContext({ token: value });
  };

  return (
    <Context.Provider value={{ setToken, token: context.token }}>
      {children}
    </Context.Provider>
  );
};

export const useSpotifyContext = () => useContext(Context);
