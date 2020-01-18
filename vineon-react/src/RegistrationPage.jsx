import React, { useState } from "react";
import { UserService } from "./User/user.service";
import { withRouter } from "react-router-dom";
import { UserContext } from "./User/UserContext";
import { useCookies, withCookies } from "react-cookie";
import "./LoginPage.css";

const register = (
  Cookie,
  username,
  password,
  confirmPassword,
  role,
  history,
  setUser,
  setCookie
) => {
  const response = UserService().register(
    Cookie,
    username,
    password,
    confirmPassword,
    role
  );
  response
    .then(value => {
      if (value.success === true && value.role === "customer") {
        setUser({ username: value.username, role: value.role });
        setCookie("session", value.username, { path: '/' });
        setCookie("role", value.role, { path: '/' });
        history.push("/user/customer/update");
      } else if (value.success === true && value.role === "store") {
        setUser({ username: value.username, role: value.role });
        setCookie('session', value.username, { path: '/' });
        setCookie('role', value.role, { path: '/' });
        history.push("/user/store/update");
      } else if (value.success === false) {
        history.push("/failure");
      }
    })
    .catch(error => console.log(error));
};

const RegistrationPageComponent = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [cookies, setCookie, removeCookie, getCookie] = useCookies(["JSESSIONID","session", "role"]);


  return (
    <UserContext.Consumer>
      {({ setUser }) => (
        <React.Fragment>
          <form
            onSubmit={event => {
              event.preventDefault();
              register(
                cookies.JSESSIONID,
                username,
                password,
                confirmPassword,
                role,
                history,
                setUser, setCookie
              );
            }}
          >
            <fieldset className="login-form">
              <p>
                <input className="login-input"
                  type="text" placeholder="Username"
                  onChange={event => setUsername(event.target.value)}
                  value={username}
                />
              </p>
              <p>
                <input className="login-input"
                  type="password" placeholder="Password"
                  onChange={event => setPassword(event.target.value)}
                  value={password}
                />
              </p>
              <p>
                <input className="login-input"
                  type="password" placeholder="Confirm Password"
                  onChange={event => setConfirmPassword(event.target.value)}
                  value={confirmPassword}
                />
              </p>
              <p>
                <input className="login-input"
                  type="text" placeholder="Role"
                  onChange={event => setRole(event.target.value)}
                  value={role}
                />
              </p>
              <input className="login-input submit-button" type="submit" value="Sign up" />
            </fieldset>
          </form>
        </React.Fragment>
      )}
    </UserContext.Consumer>
  );
};

export const RegistrationPage = withRouter(RegistrationPageComponent);
