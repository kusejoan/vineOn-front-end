import React from "react";
import { StoreInfoContext } from "./StoreInfoContext";

export const StoreInfo = () => (
  <React.Fragment>
    <StoreInfoContext.Consumer>
      {({ storeInfo, setStoreInfo }) => (
        <div>
          {" "}
          Welcome to store {storeInfo.storeName},<br /> info: <br />{" "}
          city: {storeInfo.city}, country: {storeInfo.country}, website: {storeInfo.website}
        </div>
      )}
    </StoreInfoContext.Consumer>
  </React.Fragment>
);
