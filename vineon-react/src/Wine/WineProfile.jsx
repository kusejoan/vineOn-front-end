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

      <form>
      <button type="submit" formAction="/user/storesofwine">
        Wyświetl sklepy mające w ofercie to wino
      </button>
    </form>

      
    </WineContext.Consumer>
    
    {/* <form>
      <p>Write comment:</p>
      <input
        type="text"
        onChange={event => setUsername(event.target.value)}
        value={username}
      />
      <input type="submit" value="Add Comment" />
    </form> */}
  </React.Fragment>
);
