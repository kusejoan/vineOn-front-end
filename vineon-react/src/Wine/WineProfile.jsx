import React from "react";
import { WineContext } from "./WineContext";
import { CookiesProvider, useCookies } from "react-cookie";


export const WineProfile = () => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "JSESSIONID",
    "wine",
    "role"
  ]);

  return (
    <WineContext.Consumer>
      {({ wine }) => {
        setCookie("wine", wine.wineName);
        return (
          <React.Fragment>
            <div>
              {" "}
              {wine.wineName}, Country: {wine.country}; Year: {wine.year};
              Color: {wine.color}, Type:{wine.type}
            </div>

            <form>
              <button type="submit" formAction="/user/storesofwine">
                Wyświetl sklepy mające w ofercie to wino
              </button>
              <button type="submit" formAction="/user/customer/ratewine">
                oceń wino
              </button>
              <button type="submit" formAction="/user/averagerating">
                średnia ocen
              </button>
              <button type="submit" formAction="/user/ratingsofwine">
                lista ocen
              </button>
            </form>
          </React.Fragment>
        );
      }}
    </WineContext.Consumer>
  );
};
