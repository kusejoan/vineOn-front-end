import React from "react";
import { UserContext } from "../User/UserContext";
import { CookiesProvider, useCookies } from "react-cookie";
import { withRouter, Link } from "react-router-dom";
import "./Navbar.css";
import{NavbarItem} from "./NavbarItem";

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
            <NavbarItem path="/user/getAllWines" title="All wines"></NavbarItem>
            <NavbarItem path="/user" title="Profile"></NavbarItem>
            <NavbarItem path="/user/logout" callback={() => logoutUser} title="Logout" ></NavbarItem>
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
            <NavbarItem path="/user/getAllWines" title="All wines"></NavbarItem>
            <NavbarItem path="/user/store" title="Profile"></NavbarItem>
            <NavbarItem path="/user/logout" callback={() => logoutStore} title="Logout"></NavbarItem>
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
            <NavbarItem path="/user/getAllWines" title="All wines"></NavbarItem>
            <NavbarItem path="/login" title="Login"></NavbarItem>
          </form>
        </div>
        <br />
        <br />
      </React.Fragment>
    );
  }
};
