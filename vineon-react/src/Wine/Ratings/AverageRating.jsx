import React, { useState } from "react";
import { UserService } from "../../User/user.service";
import { WineService } from "../wine.service";
import { withRouter } from "react-router-dom";
import { WineContext } from "../WineContext";
import { UserContext } from "../../User/UserContext";
import { StoreContext } from "../../Store/StoreContext";
import { CookiesProvider, useCookies } from "react-cookie";

const AverageRatingGet = (wineName, setGrade, setAmountOfGrades) => {
  const response = WineService().ratingsOfWine(wineName);
  response
    .then(value => {
      if (value.success === true) {
        setGrade(value.grade);
        setAmountOfGrades(value.amountOfGrades);
      }
    })
    .catch(error => console.log(error));
};


const AverageRatingComponent = ({ history }) => {
  const [grade, setGrade] = useState([]);
  const [amountOfGrades, setAmountOfGrades] = useState("");
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
    {({ wine, setWine }) => {
        AverageRatingGet(wine.wineName, setGrade, setAmountOfGrades);
        return (
            <React.Fragment>
                <div>Średnia ocen: {grade}    Liczba ocen {amountOfGrades}</div>
            </React.Fragment>
        )
    }}
    </WineContext.Consumer>
  );
};

export const AverageRating = withRouter(AverageRatingComponent);
