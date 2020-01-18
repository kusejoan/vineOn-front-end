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

import React, { useState } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import "./UserProfile.css";

const recommended = (setCookie, onlyFollowed, limit, color, country, history) => {
  setCookie("SonlyFollowed", onlyFollowed);
  setCookie("Slimit", limit);
  setCookie("Scolor", color);
  setCookie("Scountry", country);
  history.push("/user/customer/recommendations");

};

export const UserProfile = ({history}) => {
  const [onlyFollowed, setOnlyFollowed] = useState("");
  const [limit, setLimit] = useState("");
  const [color, setColor] = useState("");
  const [country, setCountry] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies([
    "session",
    "SonlyFollowed",
    "Slimit",
    "Scolor",
    "Scountry"
  ]);


  return (
    <React.Fragment>
      <div> Jesteś zalogowany jako {cookies.session}</div>
      <div className="label-container">
          <form>
            <button type="submit" className="label" formAction="/user/addwine">
              Dodaj wino
            </button>
          </form>
      </div>
      <br />
      <br />
      <p>
        Polecane dla ciebie:
        <br />
        <form
          onSubmit={event => {
            event.preventDefault();
            recommended(setCookie, onlyFollowed, limit, color, country, history);
          }}
        >
          <fieldset className="login-form">
            <p>
              Brać pod uwagę oceny tlyko śledzonych użytkowników? (true/false):
              <input className="login-input"
                type="text" placeholder=""
                onChange={event => setOnlyFollowed(event.target.value)}
                value={onlyFollowed}
              />
            </p>
            <p>
              <input className="login-input"
                type="text" placeholder="Ograniczenie"
                onChange={event => setLimit(event.target.value)}
                value={limit}
              />
            </p>
            <p>
              <input className="login-input"
                type="text" placeholder="Kolor"
                onChange={event => setColor(event.target.value)}
                value={color}
              />
            </p>
            <p>
              <input className="login-input"
                type="text" placeholder="Kraj"
                onChange={event => setCountry(event.target.value)}
                value={country}
              />
            </p>
            <p>
            <input className="login-input submit-button"  type="submit" value="Zatwierdź"/>
            </p>
          </fieldset>
        </form>
      </p>
    </React.Fragment>
  );
};
