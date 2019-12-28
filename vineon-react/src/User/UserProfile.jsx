import React from "react";
import { UserContext } from "./UserContext";

export const UserProfile = () => (
  <React.Fragment>
    <UserContext.Consumer>
      {({ user }) => <div> You re logged in {user.username}</div>}
    </UserContext.Consumer>
    <form>
      <button type="submit" formAction="/user/addwine">
        Add Wine
      </button>
    </form>
    <br/>
    <br/>
    <p>
    Polecane dla cb: 
    <br/>
    tutaj będzie lista win polecanych użytkownikowi
    </p>
  </React.Fragment>
);
