import React from "react";
import { WineContext } from "./WineContext";
import { CookiesProvider, useCookies } from "react-cookie";
import {NavbarItem} from "../Navbar/NavbarItem";
import {Navbar} from "../Navbar/Navbar";
import"./WineProfile.css"


export const WineProfile = () => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "JSESSIONID",
    "wine",
    "role"
  ]);

  return (
    <WineContext.Consumer>
      {({ wine }) => {
        setCookie("wine", wine.wineName);
        return (
          <React.Fragment>
            <div className="wine-profile">
              {" "}
              Name: {wine.wineName} <br />
              Country: {wine.country} <br />
              Year: {wine.year} <br />
              Color: {wine.color} <br />
              Type:{wine.type} <br />
            </div>
            <form>
              <NavbarItem  path="/user/storesofwine" title="Sklepy z winem"></NavbarItem>
              <NavbarItem path="/user/customer/ratewine" title="Recenzuj wino"></NavbarItem>
              <NavbarItem path="/user/averagerating" title="Średnia ocen"></NavbarItem>
              <NavbarItem path="/user/ratingsofwine" title="Oceny użytkowników"></NavbarItem>
            </form>
          </React.Fragment>
        );
      }}
    </WineContext.Consumer>
  );
};
