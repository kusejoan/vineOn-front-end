import React from "react";

export const initialUserState = {
  username: null,
  role: null
};

const initialSetUser = () => {};

const initialContextValue = { user: initialUserState, setUser: initialSetUser };

export const UserContext = React.createContext(initialContextValue);
