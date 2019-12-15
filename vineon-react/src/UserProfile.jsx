import React from "react";
import { UserContext } from "./Contexts/UserContext";

export const UserProfile = () => (
  <React.Fragment>
    <UserContext.Consumer>
      {({ user }) => (<div> You re logged in {user.username}</div>)}
    </UserContext.Consumer>
    <form>
      <button type="submit" formAction="/user/addwine">
        Add Wine
      </button>
    </form>
  </React.Fragment>
);
