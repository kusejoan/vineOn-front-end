import React, { useState } from "react";
import { UserService } from "../../User/user.service";
import { WineService } from "../wine.service";
import { withRouter } from "react-router-dom";
import { WineContext } from "../WineContext";
import { UserContext } from "../../User/UserContext";
import { StoreContext } from "../../Store/StoreContext";
import { CookiesProvider, useCookies } from "react-cookie";

const RatingsOfWineList = (setRatingsOfWine, wineName) => {
  const response = WineService().ratingsOfWine(wineName);
  response
    .then(value => {
      setRatingsOfWine(value.grades);
    })
    .catch(error => console.log(error));
};

const displayRatings = (setUsername, setGrade, setDescription) => rating => (
  <React.Fragment>
    <WineContext.Consumer>
      {({ wine, setWine }) => (
        <div>
          <br />
          Wine:{wine.wineName}
          User:{rating.username}
          Grade:{rating.grade}
          Description:{rating.description}
          <br />
        </div>
      )}
    </WineContext.Consumer>
    <br />
  </React.Fragment>
);

const RatingsOfWineComponent = ({ history }) => {
  const [username, setUsername] = useState([]);
  const [ratingsOfWine, setRatingsOfWine] = useState([]);
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
    {({ wine, setWine }) => {
        if (ratingsOfWine.length === 0) 
            RatingsOfWineList(setRatingsOfWine, wine.wineName);
        return (
            <React.Fragment>
                <div>Lista ocen:</div>
                {ratingsOfWine.map(displayRatings(setUsername, setGrade, setDescription))}
            </React.Fragment>
        )
    }}
    </WineContext.Consumer>
  );
};

export const RatingsOfWine = withRouter(RatingsOfWineComponent);
