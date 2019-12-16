import React, { useState } from "react";
import { UserService } from "./user.service";
import { withRouter } from "react-router-dom";
import { UserContext } from "./UserContext";
import "./LoginPage.css";
import {Navbar} from "./Navbar";
import {ReactComponent as Vineicon} from "./icon.svg";

const login = (username, password, history, setUser) => {
  const response = UserService().login(username, password);
  response
    .then(value => {
      if (value.data.success === true) {
        setUser({username: value.data.user, role: value.data.role});
        history.push("/user_profile");
      }
    })
    .catch(error => console.log(error));
};

const LoginPageComponent = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <UserContext.Consumer>
      {({setUser}) => (<React.Fragment>
        <div className="header">
          <Navbar />
        </div>
        <div className="icon"> <Vineicon/></div>
        <form
          onSubmit={event => {
            event.preventDefault();
            login(username, password, history, setUser);
          }}
        >
          <fieldset className="login-form">
            <p>
              <input className="login-input"
                type="text" placeholder="Nazwa użytkownika"
                onChange={event => setUsername(event.target.value)}
                value={username}
              />
            </p>
            <p>
              <input className="login-input"
                type="password" placeholder="Hasło"
                value={password} onChange={event => setPassword(event.target.value)}
              />
            </p>
            <input className="login-input submit-button"  type="submit" value="Zaloguj" />
            <input className="login-input submit-button"  type="submit" value="Zarejstruj" />

          </fieldset>
        </form>
      </React.Fragment>)
    }
    </UserContext.Consumer>
  );
};

export const LoginPage = withRouter(LoginPageComponent);
