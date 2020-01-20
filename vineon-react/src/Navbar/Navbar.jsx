/*
 * Copyright (c) 2020.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions are met:
 *  1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 *  2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 *  3. Neither the name of Vineon nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

import React from "react";
import { UserContext } from "../User/UserContext";
import { CookiesProvider, useCookies } from "react-cookie";
import { withRouter, Link } from "react-router-dom";
import "./Navbar.css";
import { NavbarItem } from "./NavbarItem";

const logoutUser = removeCookie => () => {
  removeCookie("role");
  removeCookie("session");
  removeCookie("storeName");
  removeCookie("address");
  removeCookie("city");
  removeCookie("country");
  removeCookie("website");
  removeCookie("userInfo");
  removeCookie("JSESSIONID");
  removeCookie("SonlyFollowed");
  removeCookie("Slimit");
  removeCookie("Scolor");
  removeCookie("Scountry");
  removeCookie("firstName");
  removeCookie("surname");
  removeCookie("birthday");
};
const logoutStore = removeCookie => () => {
  removeCookie("role");
  removeCookie("session");
  removeCookie("storeName");
  removeCookie("address");
  removeCookie("city");
  removeCookie("country");
  removeCookie("website");
  removeCookie("JSESSIONID");
  removeCookie("userInfo");
  removeCookie("SonlyFollowed");
  removeCookie("Slimit");
  removeCookie("Scolor");
  removeCookie("Scountry");
  removeCookie("firstName");
  removeCookie("surname");
  removeCookie("birthday");
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

            <NavbarItem
              path="/user/logout"
              callback={logoutStore(removeCookie)}
              title="Logout"
            ></NavbarItem>
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
