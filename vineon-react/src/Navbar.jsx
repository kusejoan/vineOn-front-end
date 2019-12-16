import React from "react";
import { UserContext } from "./Contexts/UserContext";

export const Navbar = () => (
  <React.Fragment>
    <div>
      {" "}
      VineOn
      <form>
        <button type="submit" formAction="/user/getAllWines">
          All wines
        </button>

        <UserContext.Consumer>
          {({ user }) => {
            if (user.role === "customer") {
              return (
                <button type="submit" formAction="/user">
                  Profile
                </button>
              );
            } else if (user.role === "store") {
              return (
                <button type="submit" formAction="/user/store">
                  Profile
                </button>
              );
            } else {
              return (
                <button type="submit" formAction="/">
                  Profile
                </button>
              );
            }
          }}
        </UserContext.Consumer>
      </form>
    </div>

    <div>
      <br />
    </div>
    <div>
      <br />
    </div>
  </React.Fragment>
);
