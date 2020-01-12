import React from "react";
import { UserContext } from "./UserContext";
import { CookiesProvider, useCookies } from "react-cookie";

export const UserProfile = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["session"]);

  return (
    <React.Fragment>
      <div> You re logged in {cookies.session}</div>

      <form>
        <button type="submit" formAction="/user/addwine">
          Add Wine
        </button>
      </form>
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
