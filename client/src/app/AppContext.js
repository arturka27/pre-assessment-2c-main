import { createContext } from "react";

const initState = {
  user: undefined,
  setUser: () => {},
  items: [],
  setItems: () => {},
};

export const AppContext = createContext(initState);