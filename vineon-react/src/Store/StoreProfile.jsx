import React from "react";
import { StoreContext } from "./StoreContext";
import { CookiesProvider, useCookies } from "react-cookie";
import {NavbarItem} from "../Navbar/NavbarItem";

export const StoreProfile = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["storeName"]);
  return (
    <React.Fragment>
      <div className="store-profile">
        {" "}
        Jesteś zalogowany jako {cookies.storeName} <br /> Informacje:{" "}
        <br />
        Miasto: {cookies.city}  <br />
        Kraj: {cookies.country}  <br />
        Adres strony: {cookies.website}
      </div>
      <form>
        <NavbarItem path="/user/store/addwine" title="Dodaj wino"></NavbarItem>
        <NavbarItem path="/user/store/removewine" title="Usuń wino"></NavbarItem>
        <NavbarItem path="/user/store/importcsv" title="Importuj "></NavbarItem>
        <NavbarItem path="/user/winesofstore" title="Twoje wina"></NavbarItem>
      </form>
    </React.Fragment>
  );
};
