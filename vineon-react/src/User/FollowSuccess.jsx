import React, { useState } from "react";
import { UserService } from "./user.service";
import { withRouter } from "react-router-dom";
import { UserContext } from "./UserContext";
import { CookiesProvider, useCookies } from "react-cookie";

const UserFollowComponent = ({ history }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["userInfo"]);

  return (
    <React.Fragment>
      <div>
        Obserwujesz użytkownika: {cookies.userInfo} <br />
      </div>
    </React.Fragment>
  );
};

export const FollowSuccess = withRouter(UserFollowComponent);
