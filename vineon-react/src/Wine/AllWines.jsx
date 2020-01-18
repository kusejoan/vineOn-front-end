import React, { useState } from "react";
import { UserService } from "../User/user.service";
import { WineService } from "./wine.service";
import { withRouter, Link } from "react-router-dom";
import { WineContext } from "./WineContext";
import { UserContext } from "../User/UserContext";
import { StoreContext } from "../Store/StoreContext";
import { CookiesProvider, useCookies } from "react-cookie";
import"./add.css";

const AllWinesList = (setAllWines, JSESSIONID, history) => {
  const response = WineService().allWines(JSESSIONID);
  response
    .then(value => {
      console.log(value);
      if (value.success === true && value.wines.length !== 0) {
        setAllWines(value.wines);
      } else if (value.success === false) {
        history.push("/failure");
      } else if (value.success === true && value.wines.length === 0) {
        history.push("/nomatchesfound");
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

const AllWinesComponent = ({ history }) => {
  const [allWines, setAllWines] = useState([]);
  const [wineName, setWineName] = useState("");
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [type, setType] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies([
    "JSESSIONID",
    "storeName",
    "address",
    "city",
    "country",
    "website"
  ]);

  if (allWines.length === 0)
    AllWinesList(setAllWines, cookies.JSESSIONID, history);
  return (
    <React.Fragment>
      <div className="add">Lista wszystkich zarejestrowanych win:</div>
      {allWines.map(
        displayWine(setWineName, setCountry, setYear, setColor, setType)
      )}
    </React.Fragment>
  );
};

export const AllWines = withRouter(AllWinesComponent);
