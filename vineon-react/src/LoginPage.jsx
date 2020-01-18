import React, { useState } from "react";
import { UserService } from "./User/user.service";
import { withRouter } from "react-router-dom";
import { UserContext } from "./User/UserContext";
import { useCookies, withCookies } from "react-cookie";
import "./LoginPage.css";
import {ReactComponent as Vineicon} from "./icon.svg";


const login = (cookies, username, password, history, setUser, setCookie) => {
  const response = UserService().login(username, password);
  response
    .then(value => {
      console.log(value);
      if (value.success === true && value.role === "customer") {
        console.log(value);
        setCookie("session", value.username, { path: '/' });
        setCookie("role", value.role, { path: '/' });
        console.log(cookies);
        setUser({ username: value.username, role: value.role });
        history.push("/user");
      } else if (value.success === true && value.role === "store") {
        setCookie('session', value.username, { path: '/' });
        setCookie('role', value.role, { path: '/' });
        setUser({ username: value.username, role: value.role });
        history.push("/user/store");
      } else if (value.success === false) {
        history.push("/failure");
      }
    })
    .catch(error => console.log(error));
};

const register = (history) => {
  history.push("/register");
}

const LoginPageComponent = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["JSESSIONID","session", "role"]);
  console.log(cookies);

  return (
    <UserContext.Consumer>
      {({ setUser }) => (
        <React.Fragment>
          <div className="icon"> <Vineicon/></div>
          <form
            onSubmit={event => {
              event.preventDefault();
              login(cookies, username, password, history, setUser, setCookie);
            }}
          >
            <fieldset className="login-form" >
              <input className="login-input"
                     type="text" placeholder="Nazwa użytkownika"

                     onChange={event => setUsername(event.target.value)}
                  value={username}
                />
              <p>
                <input className="login-input"
                       type="password" placeholder="Hasło"
                       value={password} onChange={event => setPassword(event.target.value)}
                />
              </p>
              <input className="login-input submit-button"  type="submit" value="Zaloguj" />
            </fieldset>
          </form>
        </React.Fragment>
      )}
    </UserContext.Consumer>
  );
};

export const LoginPage = withRouter(LoginPageComponent);
