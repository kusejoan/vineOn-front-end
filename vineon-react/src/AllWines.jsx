import React, { useState } from "react";
import { UserService } from "./user.service";
import { withRouter, Link } from "react-router-dom";
// import { Link } from "react-router";
import { WineContext } from "./Contexts/WineContext";
import { UserContext } from "./Contexts/UserContext";
import { StoreContext } from "./Contexts/StoreContext";

const AllWinesList = setAllWines => {
  const response = UserService().allWines();
  response
    .then(value => {
      setAllWines(value.data.wines);
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

  if (allWines.length == 0) AllWinesList(setAllWines);
  return (
    <React.Fragment>
      <div>Lista wszystkich zarejestrowanych win:</div>
      {allWines.map(
        displayWine(setWineName, setCountry, setYear, setColor, setType)
      )}
    </React.Fragment>
  );
};

export const AllWines = withRouter(AllWinesComponent);
