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
import { UserService } from "../../User/user.service";
import { WineService } from "../wine.service";
import { withRouter } from "react-router-dom";
import { WineContext } from "../WineContext";
import { UserContext } from "../../User/UserContext";
import { StoreContext } from "../../Store/StoreContext";
import { CookiesProvider, useCookies } from "react-cookie";

const AverageRatingGet = (wineName, setGrade, setAmountOfGrades, history) => {
  const response = WineService().averageRating(wineName);
  response
    .then(value => {
      if (value.success === true) {
        setGrade(value.grade);
        setAmountOfGrades(value.amountOfGrades);
      }
    })
    .catch(error => console.log(error));
};


const AverageRatingComponent = ({ history }) => {
  const [grade, setGrade] = useState([]);
  const [amountOfGrades, setAmountOfGrades] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies([
    "JSESSIONID",
    "storeName",
    "address",
    "city",
    "country",
    "website"
  ]);

  

  return (
    <WineContext.Consumer>
    {({ wine, setWine }) => {
        AverageRatingGet(cookies.wine, setGrade, setAmountOfGrades, history);
        return (
            <React.Fragment>
                <div>Średnia ocen: {grade}    Liczba ocen {amountOfGrades}</div>
            </React.Fragment>
        )
    }}
    </WineContext.Consumer>
  );
};

export const AverageRating = withRouter(AverageRatingComponent);
