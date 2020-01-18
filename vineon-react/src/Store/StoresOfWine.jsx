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
import { WineService } from "../Wine/wine.service";
import { withRouter, Link } from "react-router-dom";
import { StoreInfoContext } from "./StoreInfoContext";
import { CookiesProvider, useCookies } from "react-cookie";

const StoresOfWineList = (setStoresOfWine, wineName,history) => {
  const response = UserService().storesOfWine(wineName);
  response
    .then(value => {
      if (value.success === true) {
        setStoresOfWine(value.stores);
      } else if (value.success === false) {
        history.push("/failure");
      }
    })
    .catch(error => console.log(error));
};

const displayStores = (
  setStoreName,
  setAddress,
  setCity,
  setCountry,
  setWebsite
) => pstore => (
  <React.Fragment>
    <StoreInfoContext.Consumer>
      {({ storeInfo: store, setStoreInfo: setStore }) => (
        <Link
          to="/storeInfo"
          onClick={() => {
            setStore(pstore);
          }}
        >
          {pstore.storeName}
        </Link>
      )}
    </StoreInfoContext.Consumer>
    <br />
  </React.Fragment>
);

const StoresOfWineComponent = ({ history }) => {
  const [storesOfWine, setStoresOfWine] = useState([]);
  const [storeName, setStoreName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [website, setWebsite] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies([
    "wine",
    "storeName",
    "address",
    "city",
    "country",
    "website"
  ]);

  if (storesOfWine.length === 0)
    StoresOfWineList(setStoresOfWine, cookies.wine, history);
  return (
    <React.Fragment>
      <div>Lista wszystkich sklepów mających to wino w ofercie:</div>
      {storesOfWine.map(
        displayStores(setStoreName, setAddress, setCity, setCountry, setWebsite)
      )}
    </React.Fragment>
  );
};

export const StoresOfWine = withRouter(StoresOfWineComponent);
