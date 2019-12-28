import React from "react";

export const initialUserInfoState = {
  username: null
};

const initialSetUserInfo = () => {};

const initialUserInfoContextValue = {
  userInfo: initialUserInfoState,
  setUserInfo: initialSetUserInfo
};

export const UserInfoContext = React.createContext(initialUserInfoContextValue);
