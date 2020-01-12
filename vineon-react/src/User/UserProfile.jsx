import React from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import "./UserProfile.css";


export const UserProfile = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["session"]);

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
        tutaj będzie lista win polecanych użytkownikowi
      </p>
    </React.Fragment>
  );
};
