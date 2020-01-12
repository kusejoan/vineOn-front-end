import React from "react";
import { UserContext } from "../User/UserContext";
import { CookiesProvider, useCookies } from "react-cookie";
import { withRouter, Link } from "react-router-dom";
import "./Navbar.css";
import{NavbarItem} from "./NavbarItem";


export const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["session", "role"]);

  const logout = () => {
    removeCookie("role");
    removeCookie("session");
  };

  if (cookies.role === "customer" && cookies.session !== null) {
    return (
      <React.Fragment>
        <div className="navbar">
          VineOn
          <form>
            <NavbarItem path="/user/getAllWines" title="All winess"></NavbarItem>
            <NavbarItem path="/user" title="Profile"></NavbarItem>
            <NavbarItem path="/user/logout" callback={()=>logout} title="Logout" ></NavbarItem>
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
        <div className="navbar">
          VineOn
          <div>
          <form>
            <button type="submit" formAction="/user/getAllWines">
              All wines
            </button>
            <button type="submit" formAction="/login">
              Login
            </button>
          </form>
        </div>
        </div>
        <br />
        <br />
      </React.Fragment>
    );
  }
};
