import React from "react";
import { WineContext } from "./WineContext";
import { CookiesProvider, useCookies } from "react-cookie";
import {NavbarItem} from "../Navbar/NavbarItem";
import {Navbar} from "../Navbar/Navbar";
import"./WineProfile.css"


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
