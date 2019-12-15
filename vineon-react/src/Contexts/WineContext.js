import React from "react";

export const initialWineState = {
  wineName: null,
  country: null,
  year: null,
  color: null,
  type: null
};

const initialSetWine = () => {};

const initialWineContextValue = {
  wine: initialWineState,
  setWine: initialSetWine
};

export const WineContext = React.createContext(initialWineContextValue);
