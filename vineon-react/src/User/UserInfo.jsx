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
import { UserInfoContext } from "./UserInfoContext";
import { CookiesProvider, useCookies } from "react-cookie";
import { UserService } from "./user.service";
import "./Union.css";
const SetFollow = (username, history) => () => {
  const response = UserService().follow(username);
  response
    .then(value => {
      if (value.success === true) {
        history.push("/user/followsuccess");
      } else if (value.success === false) {
        history.push("/failure");
      }
    })
    .catch(error => console.log(error));
};

const SetUnfollow = (username, history) => () => {
  const response = UserService().unfollow(username);
  response
    .then(value => {
      if (value.success === true) {
        history.push("/user/unfollowsuccess");
      } else if (value.success === false) {
        history.push("/failure");
      }
    })
    .catch(error => console.log(error));
};

export const UserInfo = ({ history }) => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "JSESSIONID",
    "userInfo",
    "role"
  ]);

  return (
    <UserInfoContext.Consumer>
      {({ userInfo, setUserInfo }) => {
        setCookie("userInfo", userInfo.username);
        return (
          <React.Fragment>
            <div className="union">
              {" "}
              Profil użytkownika: {userInfo.username} <br />
            </div>

            <div>
              <button className="label-container" onClick={SetFollow(cookies.userInfo, history)}>
                Obserwuj
              </button>
              <button className="label-container" onClick={SetUnfollow(cookies.userInfo, history)}>
                Przestań obserwować
              </button>
            </div>
          </React.Fragment>
        );
      }}
    </UserInfoContext.Consumer>
  );
};
