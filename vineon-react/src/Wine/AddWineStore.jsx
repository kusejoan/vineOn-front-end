import React, { useState } from "react";
import { UserService } from "../User/user.service";
import { WineService } from "./wine.service";
import { withRouter } from "react-router-dom";
import { WineContext } from "./WineContext";
import { UserContext } from "../User/UserContext";
import { StoreContext } from "../Store/StoreContext";

const addWineStore = (wineName, history, setWine) => {
  const response = WineService().addWineStore(wineName);
  response
    .then(value => {
      if (value.success === true) {
        history.push("/added");
      }
    })
    .catch(error => console.log(error));
};

const AddWineStoreComponent = ({ history }) => {
  const [wineName, setWineName] = useState("");

  return (
    <WineContext.Consumer>
      {({ setWine }) => (
        <React.Fragment>
          <form
            onSubmit={event => {
              event.preventDefault();
              addWineStore(wineName, history, setWine);
            }}
          >
            <fieldset>
              <p>
                Name of wine you want to add:
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

export const AddWineStore = withRouter(AddWineStoreComponent);
