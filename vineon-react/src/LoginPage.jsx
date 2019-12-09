import React, { useState } from "react";
import { UserService } from "./user.service";
import { withRouter } from "react-router-dom";
import { UserContext } from "./UserContext";

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
        <form
          onSubmit={event => {
            event.preventDefault();
            login(username, password, history, setUser);
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
            <input type="submit" value="Submit" />
          </fieldset>
        </form>
      </React.Fragment>)
    }
    </UserContext.Consumer>
  );
};

export const LoginPage = withRouter(LoginPageComponent);
