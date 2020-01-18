import React, { useState } from "react";
import { UserService } from "../User/user.service";
import { WineService } from "./wine.service";
import { withRouter } from "react-router-dom";
import { WineContext } from "./WineContext";
import { UserContext } from "../User/UserContext";
import { StoreContext } from "../Store/StoreContext";
import { CookiesProvider, useCookies } from "react-cookie";


const removeWineStore = (JSESSIONID, wineName, history, setWine) => {
  const response = WineService().removeWineStore(JSESSIONID,wineName);
  response
    .then(value => {
      if (value.success === true) {
        history.push("/removed");
      } else if (value.success === false) {
        history.push("/failure");
      }
    })
    .catch(error => console.log(error));
};

const RemoveWineStoreComponent = ({ history }) => {
  const [wineName, setWineName] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["JSESSIONID","storeName", "address", "city", "country", "website"]);


  return (
    <WineContext.Consumer>
      {({ setWine }) => (
        <React.Fragment>
          <form
            onSubmit={event => {
              event.preventDefault();
              removeWineStore(cookies.JSESSIONID, wineName, history, setWine);
            }}
          >
            <fieldset>
              <p>
                Name of wine you want to remove:
                <input
                  type="text"
                  onChange={event => setWineName(event.target.value)}
                  value={wineName}
                />
              </p>
              <input type="submit" value="Submit" />
            </fieldset>
          </form>
        </React.Fragment>
      )}
    </WineContext.Consumer>
  );
};

export const RemoveWineStore = withRouter(RemoveWineStoreComponent);