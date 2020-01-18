import React, { useState } from "react";
import { UserService } from "./user.service";
import { withRouter, Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { CookiesProvider, useCookies } from "react-cookie";

const AllUsersList = (setAllUsers, history) => {
  const response = UserService().allUsers();
  response
    .then(value => {
      if (value.success == true) {
        setAllUsers(value.users);
      } else if (value.success === false) {
        history.push("/failure");
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
