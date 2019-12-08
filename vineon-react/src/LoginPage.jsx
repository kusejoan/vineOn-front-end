import React, { useState } from "react";
import { UserService } from "./user.service";

const login = (username, password) => {
  const response = UserService().login(username, password);
  response.then(value => console.log(value)).catch(error => console.log(error)) 
};

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <React.Fragment>
      <form
        onSubmit={event => {
          event.preventDefault();
          login(username, password);
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
