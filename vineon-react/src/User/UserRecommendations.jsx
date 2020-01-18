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
import { UserService } from "./user.service";
import { withRouter, Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { WineContext } from "../Wine/WineContext";

import { CookiesProvider, useCookies } from "react-cookie";

const RecommendationsList = (
  setRecommendations,
  onlyFollowed,
  limit,
  color,
  country,
  history
) => {
  const response = UserService().recommendations(
    onlyFollowed,
    limit,
    color,
    country
  );
  response
    .then(value => {
      if (value.success === true) {
        setRecommendations(value.wines);
      } else if (value.success === false) {
        history.push("/failure");
      } else if (
        value.success === true &&
        value.message === "There are no wines that match criteria"
      ) {
        history.push("/nomatchesfound");
      }
    })
    .catch(error => console.log(error));
};

const displayWine = (
  setWineName,
  setCountry,
  setYear,
  setColor,
  setType
) => pwine => (
  <React.Fragment>
    <WineContext.Consumer>
      {({ wine, setWine }) => (
        <Link
          to="/wine"
          onClick={() => {
            setWine(pwine);
          }}
        >
          {pwine.wineName}
        </Link>
      )}
    </WineContext.Consumer>
    <br />
  </React.Fragment>
);

const RecommendationsComponent = ({ history }) => {
  const [recommendationsList, setRecommendationsList] = useState([]);
  const [wineName, setWineName] = useState("");
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [type, setType] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies([
    "JSESSIONID",
    "storeName",
    "address",
    "city",
    "country",
    "website",
    "SonlyFollowed",
    "Slimit",
    "Scolor",
    "Scountry"
  ]);

  if (recommendationsList.length === 0)
    RecommendationsList(
      setRecommendationsList,
      cookies.SonlyFollowed,
      cookies.Slimit,
      cookies.Scolor,
      cookies.Scountry,
      history
    );
  return (
    <React.Fragment>
      <div>Lista wszystkich polecanych win:</div>
      {recommendationsList.map(
        displayWine(setWineName, setCountry, setYear, setColor, setType)
      )}
    </React.Fragment>
  );
};

export const Recommendations = withRouter(RecommendationsComponent);
