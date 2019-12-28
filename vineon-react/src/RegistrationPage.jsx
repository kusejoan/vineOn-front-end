import React, { useState } from "react";
import { UserService } from "./User/user.service";
import { withRouter } from "react-router-dom";
import { UserContext } from "./User/UserContext";

const register = (
  username,
  password,
  confirmPassword,
  role,
  history,
  setUser
) => {
  const response = UserService().register(
    username,
    password,
    confirmPassword,
    role
  );
  response
    .then(value => {
      if (value.success === true && value.role === "customer") {
        setUser({ username: value.username, role: value.role });
        history.push("/user");
      } else if (value.success === true && value.role === "store") {
        setUser({ username: value.username, role: value.role });
        history.push("/user/store/update");
      }
    })
    .catch(error => console.log(error));
};

const RegistrationPageComponent = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  return (
    <UserContext.Consumer>
      {({ setUser }) => (
        <React.Fragment>
          <form
            onSubmit={event => {
              event.preventDefault();
              register(
                username,
                password,
                confirmPassword,
                role,
                history,
                setUser
              );
            }}
          >
            <fieldset>
              <p>
                username:
                <input
                  type="text"
                  onChange={event => setUsername(event.target.value)}
                  value={username}
                />
              </p>
              <p>
                password:
                <input
                  type="text"
                  onChange={event => setPassword(event.target.value)}
                  value={password}
                />
              </p>
              <p>
                confirm password:
                <input
                  type="text"
                  onChange={event => setConfirmPassword(event.target.value)}
                  value={confirmPassword}
                />
              </p>
              <p>
                role:
                <input
                  type="text"
                  onChange={event => setRole(event.target.value)}
                  value={role}
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

export const RegistrationPage = withRouter(RegistrationPageComponent);
