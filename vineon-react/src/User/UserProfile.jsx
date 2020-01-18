import React, { useState } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import "./UserProfile.css";

const recommended = (setCookie, onlyFollowed, limit, color, country, history) => {
  setCookie("SonlyFollowed", onlyFollowed);
  setCookie("Slimit", limit);
  setCookie("Scolor", color);
  setCookie("Scountry", country);
  history.push("/user/customer/recommendations");

};

export const UserProfile = ({history}) => {
  const [onlyFollowed, setOnlyFollowed] = useState("");
  const [limit, setLimit] = useState("");
  const [color, setColor] = useState("");
  const [country, setCountry] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies([
    "session",
    "SonlyFollowed",
    "Slimit",
    "Scolor",
    "Scountry"
  ]);


  return (
    <React.Fragment>
      <div> Jesteś zalogowany jako {cookies.session}</div>
      <div className="label-container">
          <form>
            <button type="submit" className="label" formAction="/user/addwine">
              Dodaj wino
            </button>
          </form>
      </div>
      <br />
      <br />
      <p>
        Polecane dla ciebie:
        <br />
        <form
          onSubmit={event => {
            event.preventDefault();
            recommended(setCookie, onlyFollowed, limit, color, country, history);
          }}
        >
          <fieldset className="login-form">
            <p>
              Brać pod uwagę oceny tlyko śledzonych użytkowników? (true/false):
              <input className="login-input"
                type="text" placeholder=""
                onChange={event => setOnlyFollowed(event.target.value)}
                value={onlyFollowed}
              />
            </p>
            <p>
              <input className="login-input"
                type="text" placeholder="Ograniczenie"
                onChange={event => setLimit(event.target.value)}
                value={limit}
              />
            </p>
            <p>
              <input className="login-input"
                type="text" placeholder="Kolor"
                onChange={event => setColor(event.target.value)}
                value={color}
              />
            </p>
            <p>
              <input className="login-input"
                type="text" placeholder="Kraj"
                onChange={event => setCountry(event.target.value)}
                value={country}
              />
            </p>
            <p>
            <input className="login-input submit-button"  type="submit" value="Zatwierdź"/>
            </p>
          </fieldset>
        </form>
      </p>
    </React.Fragment>
  );
};
