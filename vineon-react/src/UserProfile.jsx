import React from "react";
import { UserContext } from "./Contexts/UserContext";

export const UserProfile = () => (
  <UserContext.Consumer>
    {({ user }) => <div> You re logged in {user.username}</div>}
  </UserContext.Consumer>
);
