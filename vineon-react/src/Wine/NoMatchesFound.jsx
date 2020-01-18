import React from "react";
import { CookiesProvider, useCookies } from "react-cookie";

export const NoMatchesFound = () => {
  return (
    <React.Fragment>
      <div> Przepraszamy, nie znaleźliśmy dopasowania.</div>
    </React.Fragment>
  );
};
