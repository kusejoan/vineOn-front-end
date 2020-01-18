import React, { useState } from "react";
import { UserService } from "../User/user.service";
import { WineService } from "./wine.service";
import { withRouter } from "react-router-dom";
import { WineContext } from "./WineContext";
import { UserContext } from "../User/UserContext";
import { StoreContext } from "../Store/StoreContext";
import { CookiesProvider, useCookies } from "react-cookie";
import "./AddWine.css";

const addWine = (JSESSINID,wineName, country, year, color, type, history, setWine) => {
  const response = WineService().addWine(JSESSINID,wineName, country, year, color, type);
  response
    .then(value => {
      if (value.success === true) {
        setWine({ wineName: wineName, country: country, year: year, color: color, type: type});
        history.push("/wine");
      }else if (value.success === false) {
        history.push("/failure");
      }
    })
    .catch(error => console.log(error));
};

const AddWineComponent = ({ history }) => {
  const [wineName, setWineName] = useState("");
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [type, setType] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["JSESSIONID","storeName", "address", "city", "country", "website"]);


  return (
    <WineContext.Consumer>
      {({ setWine }) => (
        <React.Fragment>
          <form
            onSubmit={event => {
              event.preventDefault();
              addWine(cookies.JSESSIONID,wineName, country, year, color, type, history, setWine);
            }}
          >
            <fieldset className="login-form">
              <p>
                <input className="login-input"
                  type="text" placeholder="Nazwa"
                  onChange={event => setWineName(event.target.value)}
                  value={wineName}
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
                <input className="login-input"
                  type="text" placeholder="Rok"
                  onChange={event => setYear(event.target.value)}
                  value={year}
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
                  type="text" placeholder="Rodzaj"
                  onChange={event => setType(event.target.value)}
                  value={type}
                />
              </p>
              <input className="login-input submit-button" type="submit" value="Zatwierdź"  />
            </fieldset>
          </form>
        </React.Fragment>
      )}
    </WineContext.Consumer>
    // {/* <React.Fragment>
    //     <UserContext.Consumer>
    //     {({ user }) => (if(user.role === "customer"){

    //     })}
    //     <StoreContext.Consumer>

    //     </StoreContext.Consumer>
    //     </UserContext.Consumer>
    // </React.Fragment> */}
  );
};

export const AddWine = withRouter(AddWineComponent);
