import React from "react";
import { UserInfoContext } from "./UserInfoContext";
import { CookiesProvider, useCookies } from "react-cookie";
import { UserService } from "./user.service";

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
            <div>
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
