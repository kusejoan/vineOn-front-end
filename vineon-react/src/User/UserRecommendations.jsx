import React, { useState } from "react";
import { UserService } from "./user.service";
import { withRouter, Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { WineContext } from "../Wine/WineContext";

import { CookiesProvider, useCookies } from "react-cookie";

const RecommendationsList = (
  setRecommendations,
  onlyFollowed,
  limit,
  color,
  country
) => {
  const response = UserService().recommendations(
    onlyFollowed,
    limit,
    color,
    country
  );
  response
    .then(value => {
      if (value.success == true) {
        setRecommendations(value.wines);
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

const RecommendationsComponent = ({ history }) => {
  const [recommendationsList, setRecommendationsList] = useState([]);
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
    "website",
    "SonlyFollowed",
    "Slimit",
    "Scolor",
    "Scountry"
  ]);

  if (recommendationsList.length === 0)
    RecommendationsList(
      setRecommendationsList,
      cookies.SonlyFollowed,
      cookies.Slimit,
      cookies.Scolor,
      cookies.Scountry
    );
  return (
    <React.Fragment>
      <div>Lista wszystkich polecanych win:</div>
      {recommendationsList.map(
        displayWine(setWineName, setCountry, setYear, setColor, setType)
      )}
    </React.Fragment>
  );
};

export const Recommendations = withRouter(RecommendationsComponent);
