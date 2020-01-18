import React from "react";
import { UserContext } from "../User/UserContext";
import { CookiesProvider, useCookies } from "react-cookie";
import { withRouter, Link } from "react-router-dom";
import "./Navbar.css";
import { NavbarItem } from "./NavbarItem";

const logoutUser = removeCookie => () => {
  removeCookie("role");
  removeCookie("session");
};
const logoutStore = removeCookie => () => {
  removeCookie("role");
  removeCookie("session");
  removeCookie("storeName");
  removeCookie("address");
  removeCookie("city");
  removeCookie("country");
  removeCookie("website");
};

export const Navbar = ({ history }) => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "session",
    "role",
    "storeName",
    "address",
    "city",
    "country",
    "website"
  ]);

  if (cookies.role === "customer" && cookies.session !== null) {
    return (
      <React.Fragment>
        <div className="navbar">
          VineOn
          <form>
            <NavbarItem path="/user/getAllWines" title="Wina"></NavbarItem>
            <NavbarItem path="/user/getAllUsers" title="Użytkownicy"></NavbarItem>
            <NavbarItem path="/user" title="Profil"></NavbarItem>
            <NavbarItem path="/user/searchwine" title="Wyszukaj"></NavbarItem>

            <NavbarItem
              path="/user/logout"
              callback={logoutUser(removeCookie)}
              title="Logout"
            ></NavbarItem>
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
            <NavbarItem path="/user/getAllWines" title="Wina"></NavbarItem>
            <NavbarItem path="/user/getAllUsers" title="Użytkownicy"></NavbarItem>
            <NavbarItem path="/user/store" title="Profil"></NavbarItem>
            <NavbarItem path="/user/searchwine" title="Wyszukaj"></NavbarItem>

            <Link to="/user/logout" onClick={() => logoutStore}>
              Logout
            </Link>
            {/* <NavbarItem path="/user/logout" callback={() => logoutStore} title="Logout"></NavbarItem> */}
          </form>
        </div>
        <br />
        <br />
      </React.Fragment>
    );
  } else if (cookies.session === null) {
    return (
      <React.Fragment>
        <div className="navbar">
          VineOn
          <form>
            <NavbarItem path="/user/getAllWines" title="Wina"></NavbarItem>
            <NavbarItem path="/register" title="Zarejestruj"></NavbarItem>
            <NavbarItem path="/login" title="Zaloguj"></NavbarItem>
          </form>
        </div>
        <br />
        <br />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="navbar">
          VineOn
          <form>
            <NavbarItem path="/user/getAllWines" title="Wina"></NavbarItem>
            <NavbarItem path="/register" title="Zarejestruj"></NavbarItem>
            <NavbarItem path="/login" title="Zaloguj"></NavbarItem>
          </form>
        </div>
        <br />
        <br />
      </React.Fragment>
    );
  }
};
