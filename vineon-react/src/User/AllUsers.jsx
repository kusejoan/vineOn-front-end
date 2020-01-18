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
import { CookiesProvider, useCookies } from "react-cookie";

const AllUsersList = (setAllUsers, history) => {
  const response = UserService().allUsers();
  response
    .then(value => {
      console.log(value);
      if (value.success === true && value.users.length !== 0) {
        setAllUsers(value.users);
      } else if (value.success === false) {
        history.push("/failure");
      } else if (value.success === true && value.users.length === 0) {
        history.push("/nomatchesfound");
      }

    })
    .catch(error => console.log(error));
};

const displayUser = (setUsername, setCookie) => puser => (
  <React.Fragment>
    <UserContext.Consumer>
      {({ user, setUser }) => (
        <Link
          to="/userInfo"
          onClick={() => {
            setCookie("userInfo", puser.username);
          }}
        >
          {puser.username}
        </Link>
      )}
    </UserContext.Consumer>
    <br />
  </React.Fragment>
);

const AllUsersComponent = ({ history }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies([
    "JSESSIONID",
    "userInfo"
  ]);

  if (allUsers.length === 0) AllUsersList(setAllUsers, history);
  return (
    <React.Fragment>
      <div>Lista wszystkich użytkowników:</div>
      {allUsers.map(displayUser(setUsername, setCookie))}
    </React.Fragment>
  );
};

export const AllUsers = withRouter(AllUsersComponent);
