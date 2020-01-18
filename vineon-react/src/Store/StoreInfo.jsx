import React from "react";
import { StoreInfoContext } from "./StoreInfoContext";
import "./StoreInfo.css"

export const StoreInfo = () => (
  <React.Fragment>
    <StoreInfoContext.Consumer>
      {({ storeInfo, setStoreInfo }) => (
        <div>
            <div className="storeInfo">
              Witamy w sklepie: {storeInfo.storeName}<br /> Informacje: <br />{" "}
              Miasto: {storeInfo.city} <br />
              Kraj: {storeInfo.country} <br />
              Adres strony: {storeInfo.website}

          </div>
          <form>
            <button className="label-container" type="submit" formAction="/user/winesofstore">
              Dostępne wina
            </button>
          </form>
        </div>
      )}
    </StoreInfoContext.Consumer>
  </React.Fragment>
);
