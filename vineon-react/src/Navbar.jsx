import React from "react";
import { UserContext } from "./User/UserContext";
import { CookiesProvider, useCookies } from "react-cookie";
import { withRouter, Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["session", "role", "storeName", "address", "city", "country", "website"]);

  const logoutUser = () => {
    removeCookie("role");
    removeCookie("session");
  };
  const logoutStore = () => {
    removeCookie("role");
    removeCookie("session");
    removeCookie("storeName");
    removeCookie("address");
    removeCookie("city");
    removeCookie("country");
    removeCookie("website");
  };

  if (cookies.role === "customer" && cookies.session !== null) {
    return (
      <React.Fragment>
        <div className="navbar">
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
                  logoutUser();
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
  } else if (cookies.role === "store") {
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
            <button>
              <Link
                to="/user/logout"
                onClick={() => {
                  logoutStore();
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
