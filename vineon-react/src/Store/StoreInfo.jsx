import React from "react";
import { StoreInfoContext } from "./StoreInfoContext";
import "./StoreInfo.css"

export const StoreInfo = () => (
  <React.Fragment>
    <StoreInfoContext.Consumer>
      {({ storeInfo, setStoreInfo }) => (
        <div>
            <div className="storeInfo">
              Welcome to store: {storeInfo.storeName}<br /> info: <br />{" "}
              city: {storeInfo.city} <br />
              country: {storeInfo.country} <br />
              website: {storeInfo.website}

          </div>
          <form>
            <button type="submit" formAction="/user/winesofstore">
              Wines of this store
            </button>
          </form>
        </div>
      )}
    </StoreInfoContext.Consumer>
  </React.Fragment>
);
