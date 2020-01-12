import React from "react";
import { StoreInfoContext } from "./StoreInfoContext";
import "./StoreInfo.css"

export const StoreInfo = () => (
  <React.Fragment>
    <StoreInfoContext.Consumer>
      {({ storeInfo, setStoreInfo }) => (
        <div className="storeInfo">
          {" "}
          Welcome to store: {storeInfo.storeName}<br /> info: <br />{" "}
          city: {storeInfo.city} <br />
            country: {storeInfo.country} <br />
            website: {storeInfo.website}
        </div>
      )}
    </StoreInfoContext.Consumer>
  </React.Fragment>
);
