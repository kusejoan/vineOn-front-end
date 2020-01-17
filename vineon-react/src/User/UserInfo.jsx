import React from "react";
import { UserInfoContext } from "./UserInfoContext";
import { CookiesProvider, useCookies } from "react-cookie";

const SetFollow = (username, history) => () => {
  const response = UserService().follow(username);
  response
    .then(value => {
      if (value.success === true) {
        history.push("/user/followsuccess");
      }
    })
    .catch(error => console.log(error));
};

const SetUnfollow = (username, history) => () => {
  const response = UserService().follow(username);
  response
    .then(value => {
      if (value.success === true) {
        history.push("/user/unfollowsuccess");
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
            <div>
              {" "}
              Profile of user: {userInfo.username},<br />
            </div>

<div>
            <button onClick={SetFollow(cookies.userInfo, history)}>
              follow
            </button>
            <button onClick={SetUnfollow(cookies.userInfo, history)}>
              unfollow
            </button>
            </div>
          </React.Fragment>
        );
      }}
    </UserInfoContext.Consumer>
  );
};
