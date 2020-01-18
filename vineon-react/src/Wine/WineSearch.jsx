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
import { UserService } from "../User/user.service";
import { WineService } from "./wine.service";
import { withRouter, Link } from "react-router-dom";
import { WineContext } from "./WineContext";
import { UserContext } from "../User/UserContext";
import { StoreContext } from "../Store/StoreContext";
import { CookiesProvider, useCookies } from "react-cookie";


const WineSearchName = (
  setCookie,
  wineName,
  history,
  setFoundWines,
  setWineName,
  setCountry,
  setYear,
  setColor,
  setType
) => {
  const response = WineService().wineSearchName(wineName);
  response
    .then(value => {
      if (value.success == true && value.wines !== null) {
        setFoundWines(value.wines);
        setCookie("searchRes", value.wines);
        history.push("/searchresult");
      } else if (value.success === false) {
        history.push("/failure");
      } else if (value.success === true && value.wines === null) {
        history.push("/nomatchesfound");
      }
    })
    .catch(error => console.log(error));
};

const WineSearchColorType = (
  setCookie,
  color,
  type,
  history,
  setFoundWines
) => {
  const response = WineService().wineSearchColorType(color, type);
  response
    .then(value => {
      if (value.success == true) {
        setFoundWines(value.wines);
        setCookie("searchRes", value.wines);
        history.push("/searchresult");
      } else if (value.success === false) {
        history.push("/failure");
      } else if (value.success === true && value.wines === null) {
        history.push("/nomatchesfound");
      }
    })
    .catch(error => console.log(error));
};

const SearchWineComponent = ({ history }) => {
  const [foundWines, setFoundWines] = useState([]);
  const [wineName, setWineName] = useState("");
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [type, setType] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies([
    "JSESSIONID",
    "searchRes"
  ]);

  return (
    <WineContext.Consumer>
      {({ setWine }) => (
        <React.Fragment>
          <form
            onSubmit={event => {
              event.preventDefault();
              WineSearchName(
                setCookie,
                wineName,
                history,
                setFoundWines,
                setWineName,
                setCountry,
                setYear,
                setColor,
                setType
              );
            }}
          >
            <fieldset>
              <p>
                Wine name:
                <input
                  type="text"
                  onChange={event => setWineName(event.target.value)}
                  value={wineName}
                />
              </p>
              <input type="submit" value="Submit" />
            </fieldset>
          </form>

          <form
            onSubmit={event => {
              event.preventDefault();
              WineSearchColorType(
                setCookie,
                color,
                type,
                history,
                setFoundWines
              );
            }}
          >
            <fieldset>
              <p>
                color:
                <input
                  type="text"
                  onChange={event => setColor(event.target.value)}
                  value={color}
                />
              </p>
              <p>
                type:
                <input
                  type="text"
                  onChange={event => setType(event.target.value)}
                  value={type}
                />
              </p>
              <input type="submit" value="Submit" />
            </fieldset>
          </form>
        </React.Fragment>
      )}
    </WineContext.Consumer>
  );
};

export const SearchWine = withRouter(SearchWineComponent);
