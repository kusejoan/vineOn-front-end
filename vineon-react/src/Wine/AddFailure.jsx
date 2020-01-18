import React from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import"./add.css";
export const AddFailure = () => {
  return (
    <React.Fragment>
      <div className="add"> Przepraszamy, coś poszło nie tak. </div>
    </React.Fragment>
  );
};
