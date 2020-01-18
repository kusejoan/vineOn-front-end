import React, { useState } from "react";
import { UserService } from "../../User/user.service";
import { WineService } from "../wine.service";
import { withRouter } from "react-router-dom";
import { WineContext } from "../WineContext";
import { UserContext } from "../../User/UserContext";
import { StoreContext } from "../../Store/StoreContext";
import { CookiesProvider, useCookies } from "react-cookie";

const rateWine = (wineName, grade, description, history) => {
  const response = WineService().rateWine(wineName, grade, description);
  response
    .then(value => {
      if (value.success === true) {
        history.push("/wine");
      }else if (value.success === false) {
        history.push("/failure");
      }
    })
    .catch(error => console.log(error));
};

const RateWineComponent = ({ history }) => {
  const [wineName, setWineName] = useState("");
  const [grade, setGrade] = useState("");
  const [description, setDescription] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies([
    "JSESSIONID",
    "storeName",
    "address",
    "city",
    "country",
    "website"
  ]);

  return (
    <WineContext.Consumer>
      {({ wine }) => (
        <React.Fragment>
          <form
            onSubmit={event => {
              event.preventDefault();
              rateWine(cookies.wine, grade, description, history);
            }}
          >
            <fieldset>
              <p>
                grade (1-10):
                <input
                  type="text"
                  onChange={event => setGrade(event.target.value)}
                  value={grade}
                />
              </p>
              <p>
                description:
                <input
                  type="text"
                  onChange={event => setDescription(event.target.value)}
                  value={description}
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

export const RateWine = withRouter(RateWineComponent);
