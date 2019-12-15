import React from "react";
import { WineContext } from "./Contexts/WineContext";

export const WineProfile = () => (
  <WineContext.Consumer>
    {({ wine }) => <div> {wine.wineName}, Country: {wine.country}; Year: {wine.year}; Color: {wine.color}, Type:{wine.type}</div>}
  </WineContext.Consumer>
);
