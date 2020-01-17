import React from "react";
import { StoreContext } from "./StoreContext";
import { CookiesProvider, useCookies } from "react-cookie";

export const StoreProfile = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["storeName"]);
  return (
    <React.Fragment>
      <div>
        {" "}
        You re logged in as a store {cookies.storeName},<br /> info:{" "}
        <br /> city: {cookies.city}, country: {cookies.country},
        website: {cookies.website}
      </div>

      <form>
        <button type="submit" formAction="/user/store/addwine">
          Add Wine to your offer
        </button>
        <button type="submit" formAction="/user/store/removewine">
          Remove wine 
        </button>
        <button type="submit" formAction="/user/store/importcsv">
          Your wines
        </button>
        <button type="submit" formAction="/user/winesofstore">
          Your wines
        </button>
      </form>
    </React.Fragment>
  );
};
