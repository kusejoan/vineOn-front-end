import React from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import"./add.css";
export const AddSuccess = () => {
  return (
    <React.Fragment>
      <div className="add"> Wino zostało dodane do twojej bazy!</div>
    </React.Fragment>
  );
};
