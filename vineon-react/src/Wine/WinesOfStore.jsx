import React, { useState } from "react";
import { UserService } from "../User/user.service";
import { WineService } from "./wine.service";
import { withRouter, Link } from "react-router-dom";
import { WineContext } from "./WineContext";
import { UserContext } from "../User/UserContext";
import { StoreInfoContext } from "../Store/StoreInfoContext";
import { CookiesProvider, useCookies } from "react-cookie";

const WinesOfStoreList = (setAllWines, storeName) => {
  const response = WineService().winesOfStore(storeName);
  response
    .then(value => {
      setAllWines(value.wines);
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

const WinesOfStoreComponent = ({ history }) => {
  const [allWines, setAllWines] = useState([]);
  const [wineName, setWineName] = useState("");
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [type, setType] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["storeName"]);

  return (
    <StoreInfoContext.Consumer>
      {({ storeInfo, setStoreInfo }) => {
        if (cookies.storeName === null) {
          {
            if (allWines.length === 0)
              WinesOfStoreList(setAllWines, storeInfo.storeName);
            return (
              <React.Fragment>
                <div>Lista wszystkich win sklepu {storeInfo.storeName}:</div>
                {allWines.map(
                  displayWine(
                    setWineName,
                    setCountry,
                    setYear,
                    setColor,
                    setType
                  )
                )}
              </React.Fragment>
            );
          }
        } else if (cookies.storeName !== null) {
          if (allWines.length === 0)
            WinesOfStoreList(setAllWines, cookies.storeName);
          return (
            <React.Fragment>
              <div>
                Lista wszystkich win w twojej ofercie {cookies.storeName}:
              </div>
              {allWines.map(
                displayWine(setWineName, setCountry, setYear, setColor, setType)
              )}
            </React.Fragment>
          );
        }
      }}
    </StoreInfoContext.Consumer>
  );
};

export const WinesOfStore = withRouter(WinesOfStoreComponent);