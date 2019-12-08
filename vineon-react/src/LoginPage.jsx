import React, { useState } from "react";
import { UserService } from "./user.service";
import { withRouter } from "react-router-dom";

const login = (username, password, history) => {
  const response = UserService().login(username, password);
  response
    .then(value => {
      if (value.data.success === true) {
        history.push("/user_profile");
      }
    })
    .catch(error => console.log(error));
};

const LoginPageComponent = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <React.Fragment>
      <form
        onSubmit={event => {
          event.preventDefault();
          login(username, password, history);
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
    </React.Fragment>
  );
};

export const LoginPage = withRouter(LoginPageComponent);
