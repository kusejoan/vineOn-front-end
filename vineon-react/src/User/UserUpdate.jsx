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
import { withRouter } from "react-router-dom";
import { UserContext } from "./UserContext";
import { CookiesProvider, useCookies } from "react-cookie";

const update = (
  cookie,
  firstName,
  surname,
  birthdate,
  history,
  setUser,
  setCookie
) => {
  const response = UserService().updateUser(
    cookie,
    firstName,
    surname,
    birthdate
  );
  response
    .then(value => {
      if (value.success === true) {
        setUser({
          firstName: value.firstName,
          surname: value.surname,
          birthdate: value.birthdate
        });
        setCookie("firstName", value.firstName, { path: "/" });
        setCookie("surname", value.surname, { path: "/" });
        setCookie("birthdate", value.birthdate, { path: "/" });
        history.push("/user");
      } else if (value.success === false) {
        history.push("/failure");
      }
    })
    .catch(error => console.log(error));
};

const UserUpdateComponent = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies([
    "JSESSIONID",
    "firstName",
    "surname",
    "birthday"
  ]);

  return (
    <UserContext.Consumer>
      {({ setUser }) => (
        <React.Fragment>
          <form
            onSubmit={event => {
              event.preventDefault();
              update(
                cookies.JSESSIONID,
                firstName,
                surname,
                birthdate,
                history,
                setUser,
                setCookie
              );
            }}
          >
            <fieldset>
              <p>
                first name:
                <input
                  type="text"
                  onChange={event => setFirstName(event.target.value)}
                  value={firstName}
                />
              </p>
              <p>
                surname:
                <input
                  type="text"
                  onChange={event => setSurname(event.target.value)}
                  value={surname}
                />
              </p>
              <p>
                birth date (dd-mm-yyyy):
                <input
                  type="text"
                  onChange={event => setBirthdate(event.target.value)}
                  value={birthdate}
                />
              </p>
              <input type="submit" value="Submit" />
            </fieldset>
          </form>
        </React.Fragment>
      )}
    </UserContext.Consumer>
  );
};

export const UserUpdate = withRouter(UserUpdateComponent);
