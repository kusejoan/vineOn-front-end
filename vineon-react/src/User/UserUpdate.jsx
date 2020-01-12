import React, { useState } from "react";
import { UserService } from "./user.service";
import { withRouter } from "react-router-dom";
import { UserContext } from "./UserContext";
import { CookiesProvider, useCookies } from "react-cookie";


const update = (firstName, surname, birthdate, history, setUser, setCookie) => {
  const response = UserService().updateUser(firstName, surname, birthdate);
  response
    .then(value => {
      if (value.success === true) {
        setUser({
          firstName: value.firstName,
          surname: value.surname,
          birthdate: value.birthdate
        });
        setCookie('firstName',value.firstName, { path: '/' });
        setCookie('surname', value.surname, { path: '/' });
        setCookie('birthdate', value.birthdate, { path: '/' });
        history.push("/user");
      }
    })
    .catch(error => console.log(error));
};

const UserUpdateComponent = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["storeName", "address", "city", "country", "website"]);


  return (
    <UserContext.Consumer>
      {({ setUser }) => (
        <React.Fragment>
          <form
            onSubmit={event => {
              event.preventDefault();
              update(firstName, surname, birthdate, history, setUser, setCookie);
            }}
          >
            <fieldset>
              <p>
                first name:
                <input
                  type="text"
                  onChange={event => setFirstName(event.target.value)}
                  value={firstName}
                />
              </p>
              <p>
                surname:
                <input
                  type="text"
                  onChange={event => setSurname(event.target.value)}
                  value={surname}
                />
              </p>
              <p>
                birth date (dd-mm-yyyy):
                <input
                  type="text"
                  onChange={event => setBirthdate(event.target.value)}
                  value={birthdate}
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

export const UserUpdate = withRouter(UserUpdateComponent);
