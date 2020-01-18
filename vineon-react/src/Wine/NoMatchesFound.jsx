import React from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import"./add.css";
export const NoMatchesFound = () => {
  return (
    <React.Fragment>
      <div className="add"> Przepraszamy, nie znaleziono żadnych dopasowań.</div>
    </React.Fragment>
  );
};
