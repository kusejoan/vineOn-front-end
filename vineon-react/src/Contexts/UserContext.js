import React from "react";

export const initialUserState = {
  username: null,
  role: null
};

const initialSetUser = () => {};

const initialUserContextValue = {
  user: initialUserState,
  setUser: initialSetUser
};

export const UserContext = React.createContext(initialUserContextValue);
