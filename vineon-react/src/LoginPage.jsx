import React, { useState } from "react";
import { UserService } from "./User/user.service";
import { withRouter } from "react-router-dom";
import { UserContext } from "./User/UserContext";
import { useCookies, withCookies } from "react-cookie";
import "./LoginPage.css";
import {Navbar} from "./Navbar/Navbar";
import {ReactComponent as Vineicon} from "./icon.svg";


const login = (username, password, history, setUser, setCookie) => {
  const response = UserService().login(username, password);
  response
    .then(value => {
      if (value.success === true && value.role === "customer") {
        setUser({ username: value.username, role: value.role });
        setCookie('session', value.username, { path: '/' });
        setCookie('role', value.role, { path: '/' });
        history.push("/user");
      } else if (value.success === true && value.role === "store") {
        setUser({ username: value.username, role: value.role });
        setCookie('session', value.username, { path: '/' });
        setCookie('role', value.role, { path: '/' });
        history.push("/user/store");
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
  const [cookies, setCookie, removeCookie] = useCookies(["session"]);

  return (
    <UserContext.Consumer>
      {({ setUser }) => (
        <React.Fragment>
          <div className="icon"> <Vineicon/></div>
          <form
            onSubmit={event => {
              event.preventDefault();
              login(username, password, history, setUser, setCookie);
            }}
          >
            <fieldset className="login-form">
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
              <input className="login-input submit-button"  type="button" value="Zarejstruj" onClick={() => register(history)}/>
            </fieldset>
          </form>
        </React.Fragment>
      )}
    </UserContext.Consumer>
  );
};

export const LoginPage = withRouter(LoginPageComponent);
