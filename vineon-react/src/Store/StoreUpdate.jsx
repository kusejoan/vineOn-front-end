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
import { withRouter } from "react-router-dom";
import { StoreContext } from "./StoreContext";
import { CookiesProvider, useCookies } from "react-cookie";


const update = (cookie, storeName, address, city, country, website, history, setStore, setCookie) => {
  const response = UserService().update(cookie, storeName, address, city, country, website);
  response
    .then(value => {
      if (value.success === true) {
        setStore({
          storeName: value.storeName,
          address: value.address,
          city: value.city,
          country: value.country,
          website: value.website
        });
        setCookie('storeName',value.storeName, { path: '/' });
        setCookie('address', value.address, { path: '/' });
        setCookie('city', value.city, { path: '/' });
        setCookie('country', value.country, { path: '/' });
        setCookie('website', value.website, { path: '/' });
        history.push("/user/store");
      } else if (value.success === false) {
        history.push("/failure");
      }
    })
    .catch(error => console.log(error));
};

const StoreUpdateComponent = ({ history }) => {
  const [storeName, setStoreName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [website, setWebsite] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["JSESSIONID","storeName", "address", "city", "country", "website"]);


  return (
    <StoreContext.Consumer>
      {({ setStore }) => (
        <React.Fragment>
          <form
            onSubmit={event => {
              event.preventDefault();
              update(cookies.JSESSIONID, storeName,address, city, country, website, history, setStore, setCookie);
            }}
          >
            <fieldset>
            <p>
                Store name:
                <input
                  type="text"
                  onChange={event => setStoreName(event.target.value)}
                  value={storeName}
                />
              </p>
              <p>
                address:
                <input
                  type="text"
                  onChange={event => setAddress(event.target.value)}
                  value={address}
                />
              </p>
              <p>
                country:
                <input
                  type="text"
                  onChange={event => setCountry(event.target.value)}
                  value={country}
                />
              </p>
              <p>
                city:
                <input
                  type="text"
                  onChange={event => setCity(event.target.value)}
                  value={city}
                />
              </p>
              <p>
                website:
                <input
                  type="text"
                  onChange={event => setWebsite(event.target.value)}
                  value={website}
                />
              </p>
              <input type="submit" value="Submit" />
            </fieldset>
          </form>
        </React.Fragment>
      )}
    </StoreContext.Consumer>
  );
};

export const StoreUpdate = withRouter(StoreUpdateComponent);
