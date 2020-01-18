import React from "react";
import { CookiesProvider, useCookies } from "react-cookie";

export const NoMatchesFound = () => {
  return (
    <React.Fragment>
      <div> Przepraszamy, nie znaleziono żadnych dopasowań.</div>
    </React.Fragment>
  );
};
