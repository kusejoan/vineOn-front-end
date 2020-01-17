import React from "react";
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
  const [cookies, setCookie, removeCookie] = useCookies([
    "session",
    "SonlyFollowed",
    "Slimit",
    "Scolor",
    "Scountry"
  ]);

  return (
    <React.Fragment>
      <div> You re logged in {cookies.session}</div>
      <div className="label-container">
        <div className="label">
          <form>
            <button type="submit" formAction="/user/addwine">
              Add Wine
            </button>
          </form>
        </div>
      </div>
      <br />
      <br />
      <p>
        Polecane dla cb:
        <br />
        <form
          onSubmit={event => {
            event.preventDefault();
            recommended(setCookie, onlyFollowed, limit, color, country, history);
          }}
        >
          <fieldset>
            <p>
              Brać pod uwagę oceny tlyko śledzonych użytkowników? (true/false):
              <input
                type="text"
                onChange={event => setWineName(event.target.value)}
                value={onlyFollowed}
              />
            </p>
            <p>
              limit:
              <input
                type="text"
                onChange={event => setYear(event.target.value)}
                value={limit}
              />
            </p>
            <p>
              color:
              <input
                type="text"
                onChange={event => setYear(event.target.value)}
                value={color}
              />
            </p>
            <p>
              country:
              <input
                type="text"
                onChange={event => setCountry(event.target.value)}
                value={country}
              />
            </p>
          </fieldset>
        </form>
      </p>
    </React.Fragment>
  );
};
