import React, { useState } from "react";
import { UserService } from "../User/user.service";
import { WineService } from "./wine.service";
import { withRouter, Link } from "react-router-dom";
import { WineContext } from "./WineContext";
import { UserContext } from "../User/UserContext";
import { StoreContext } from "../Store/StoreContext";

const WineSearchName = (
  wineName,
  history,
  setFoundWines,
  setWineName,
  setCountry,
  setYear,
  setColor,
  setType
) => {
  const response = WineService().wineSearchName(wineName);
  response
    .then(value => {
      if (value.success == true) {
        setFoundWines(value.wines);
        return WinesList(
          value.wines,
          setWineName,
          setCountry,
          setYear,
          setColor,
          setType
        );
      } else if (value.success === false) {
        history.push("/failure");
      }
    })
    .catch(error => console.log(error));
};

const WineSearchColorType = (color, type, history, setFoundWines) => {
  const response = WineService().wineSearchColorType(color, type);
  response
    .then(value => {
      if (value.success == true) {
        setFoundWines(value.wines);
      } else if (value.success === false) {
        history.push("/failure");
      }
    })
    .catch(error => console.log(error));
};

const displayWine = (
  setWineName,
  setCountry,
  setYear,
  setColor,
  setType
) => pwine => (
  <React.Fragment>
    <WineContext.Consumer>
      {({ wine, setWine }) => (
        <Link
          to="/wine"
          onClick={() => {
            setWine(pwine);
          }}
        >
          {pwine.wineName}
        </Link>
      )}
    </WineContext.Consumer>
    <br />
  </React.Fragment>
);

const WinesList = (
  wines,
  setWineName,
  setCountry,
  setYear,
  setColor,
  setType
) => {
  return (
    <React.Fragment>
      <div>Lista znalezionych win:</div>
      {wines.map(
        displayWine(setWineName, setCountry, setYear, setColor, setType)
      )}
    </React.Fragment>
  );
};

const SearchWineComponent = ({ history }) => {
  const [foundWines, setFoundWines] = useState([]);
  const [wineName, setWineName] = useState("");
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [type, setType] = useState("");

  return (
    <WineContext.Consumer>
      {({ setWine }) => (
        <React.Fragment>
          <form
            onSubmit={event => {
              event.preventDefault();
              WineSearchName(
                wineName,
                history,
                setFoundWines,
                setWineName,
                setCountry,
                setYear,
                setColor,
                setType
              );
            }}
          >
            <fieldset>
              <p>
                Wine name:
                <input
                  type="text"
                  onChange={event => setWineName(event.target.value)}
                  value={wineName}
                />
              </p>
              <input type="submit" value="Submit" />
            </fieldset>
          </form>

          <form
            onSubmit={event => {
              event.preventDefault();
              WineSearchColorType(color, type, history, setFoundWines);
            }}
          >
            <fieldset>
              <p>
                color:
                <input
                  type="text"
                  onChange={event => setColor(event.target.value)}
                  value={color}
                />
              </p>
              <p>
                type:
                <input
                  type="text"
                  onChange={event => setType(event.target.value)}
                  value={type}
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

export const SearchWine = withRouter(SearchWineComponent);
