import React from "react";
import { UserContext } from "./User/UserContext";
import { CookiesProvider, useCookies } from "react-cookie";
import { withRouter, Link } from "react-router-dom";


export const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["session", "role"]);

  const logout = () => {
    removeCookie("role");
    removeCookie("session");
  };

  if (cookies.role === "customer" && cookies.session !== null) {
    return (
      <React.Fragment>
        <div>
          VineOn
          <form>
            <button type="submit" formAction="/user/getAllWines">
              All wines
            </button>
            <button type="submit" formAction="/user">
              Profile
            </button>
            <button>
            <Link
              to="/user/logout"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </Link>
            </button>
          </form>
        </div>
        <br />
        <br />
      </React.Fragment>
    );
  } else if (cookies.role === "store" && cookies.session !== null) {
    return (
      <React.Fragment>
        <div>
          VineOn
          <form>
            <button type="submit" formAction="/user/getAllWines">
              All wines
            </button>
            <button type="submit" formAction="/user/store">
              Profile
            </button>
            <button onClick={logout} formAction="/user/logout">
              Logout
            </button>
          </form>
        </div>
        <br />
        <br />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div>
          VineOn
          <form>
            <button type="submit" formAction="/user/getAllWines">
              All wines
            </button>
            <button type="submit" formAction="/login">
              Login
            </button>
          </form>
        </div>
        <br />
        <br />
      </React.Fragment>
    );
  }
};
