import React from "react";

export const initialStoreInfoState = {
  storeName: null,
  address: null,
  city: null,
  country: null,
  website: null
};

const initialSetStoreInfo = () => {};

const initialStoreInfoContextValue = {
  storeInfo: initialStoreInfoState,
  setStoreInfo: initialSetStoreInfo
};

export const StoreInfoContext = React.createContext(initialStoreInfoContextValue);
