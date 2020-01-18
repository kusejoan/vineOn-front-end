import React, { useState } from "react";
import { UserService } from "../User/user.service";
import { WineService } from "../Wine/wine.service";
import { withRouter, Link } from "react-router-dom";
import { StoreInfoContext } from "./StoreInfoContext";
import { CookiesProvider, useCookies } from "react-cookie";

const StoresOfWineList = (setStoresOfWine, wineName,history) => {
  const response = UserService().storesOfWine(wineName);
  response
    .then(value => {
      if (value.success === true) {
        setStoresOfWine(value.stores);
      } else if (value.success === false) {
        history.push("/failure");
      }
    })
    .catch(error => console.log(error));
};

const displayStores = (
  setStoreName,
  setAddress,
  setCity,
  setCountry,
  setWebsite
) => pstore => (
  <React.Fragment>
    <StoreInfoContext.Consumer>
      {({ storeInfo: store, setStoreInfo: setStore }) => (
        <Link
          to="/storeInfo"
          onClick={() => {
            setStore(pstore);
          }}
        >
          {pstore.storeName}
        </Link>
      )}
    </StoreInfoContext.Consumer>
    <br />
  </React.Fragment>
);

const StoresOfWineComponent = ({ history }) => {
  const [storesOfWine, setStoresOfWine] = useState([]);
  const [storeName, setStoreName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [website, setWebsite] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies([
    "wine",
    "storeName",
    "address",
    "city",
    "country",
    "website"
  ]);

  if (storesOfWine.length === 0)
    StoresOfWineList(setStoresOfWine, cookies.wine, history);
  return (
    <React.Fragment>
      <div>Lista wszystkich sklepów mających to wino w ofercie:</div>
      {storesOfWine.map(
        displayStores(setStoreName, setAddress, setCity, setCountry, setWebsite)
      )}
    </React.Fragment>
  );
};

export const StoresOfWine = withRouter(StoresOfWineComponent);
