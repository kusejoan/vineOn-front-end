import React from "react";
import { StoreContext } from "./StoreContext";

export const StoreProfile = () => (
  <React.Fragment>
    <StoreContext.Consumer>
      {({ store, setStore }) => (
        <div>
          {" "}
          You re logged in as a store {store.storeName},<br /> info: <br />{" "}
          city: {store.city}, country: {store.country}, website: {store.website}
        </div>
      )}
    </StoreContext.Consumer>
    <form>
      <button type="submit" formAction="/user/addwine">
        Add Wine
      </button>
    </form>
  </React.Fragment>
);
