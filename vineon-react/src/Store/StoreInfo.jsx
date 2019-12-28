import React from "react";
import { StoreInfoContext } from "./StoreInfoContext";

export const StoreProfile = () => (
  <React.Fragment>
    <StoreInfoContext.Consumer>
      {({ store, setStore }) => (
        <div>
          {" "}
          Welcome to store {store.storeName},<br /> info: <br />{" "}
          city: {store.city}, country: {store.country}, website: {store.website}
        </div>
      )}
    </StoreInfoContext.Consumer>
  </React.Fragment>
);
