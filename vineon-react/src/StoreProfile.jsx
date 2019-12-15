import React from "react";
import { StoreContext } from "./Contexts/StoreContext";


export const StoreProfile = () => (
  <StoreContext.Consumer>
    {({ store }) => <div> You re logged in as a store {store.storeName}, info: {store.city}, {store.country}, {store.website}</div>}
  </StoreContext.Consumer>
);
