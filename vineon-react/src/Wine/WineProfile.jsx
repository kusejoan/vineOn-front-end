import React from "react";
import { WineContext } from "./WineContext";

export const WineProfile = () => (
  <React.Fragment>
    <WineContext.Consumer>
      {({ wine }) => (
        <div>
          {" "}
          {wine.wineName}, Country: {wine.country}; Year: {wine.year}; Color:{" "}
          {wine.color}, Type:{wine.type}
        </div>
      )}
    </WineContext.Consumer>
    <form>
      <button type="submit" formAction="/user/storesofwine">
        Wyświetl sklepy mające w ofercie to wino
      </button>
    </form>
  </React.Fragment>
);
