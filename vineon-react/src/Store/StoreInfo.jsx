import React from "react";
import { StoreInfoContext } from "./StoreInfoContext";

export const StoreInfo = () => (
  <React.Fragment>
    <StoreInfoContext.Consumer>
      {({ storeInfo, setStoreInfo }) => (
        <div>
          <div>
            {" "}
            Welcome to store {storeInfo.storeName},<br /> info: <br /> city:{" "}
            {storeInfo.city}, country: {storeInfo.country}, website:{" "}
            {storeInfo.website}
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
