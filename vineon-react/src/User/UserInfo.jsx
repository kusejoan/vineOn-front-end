import React from "react";
import { UserInfoContext } from "./UserInfoContext";

export const UserInfo = () => (
  <React.Fragment>
    <UserInfoContext.Consumer>
      {({ userInfo, setUserInfo }) => (
        <div>
          {" "}
          Profile of user: {userInfo.username},<br />
        </div>
      )}
    </UserInfoContext.Consumer>
  </React.Fragment>
);
