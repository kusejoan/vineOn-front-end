import React from "react";

export const initialStoreState = {
  storeName: null,
  address: null,
  city: null,
  country: null,
  website: null,
  role: null
};

const initialSetStore = () => {};

const initialStoreContextValue = {
  store: initialStoreState,
  setStore: initialSetStore
};

export const StoreContext = React.createContext(initialStoreContextValue);
