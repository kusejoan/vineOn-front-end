import React, { useState } from "react";
import { UserService } from "../User/user.service";
import { withRouter } from "react-router-dom";
import { StoreContext } from "./StoreContext";
import { CookiesProvider, useCookies } from "react-cookie";


const update = (address, city, country, website, history, setStore, setCookie) => {
  const response = UserService().update(address, city, country, website);
  response
    .then(value => {
      if (value.data.success === true) {
        setStore({
          storeName: value.storeName,
          address: value.address,
          city: value.city,
          country: value.country,
          website: value.website
        });
        setCookie('storeName',value.storeName, { path: '/' });
        setCookie('address', value.address, { path: '/' });
        setCookie('city', value.city, { path: '/' });
        setCookie('country', value.country, { path: '/' });
        setCookie('website', value.website, { path: '/' });
        history.push("/user/store");
      }
    })
    .catch(error => console.log(error));
};

const StoreUpdateComponent = ({ history }) => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [website, setWebsite] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["storeName", "address", "city", "country", "website"]);


  return (
    <StoreContext.Consumer>
      {({ setStore }) => (
        <React.Fragment>
          <form
            onSubmit={event => {
              event.preventDefault();
              update(address, city, country, website, history, setStore, setCookie);
            }}
          >
            <fieldset>
              <p>
                address:
                <input
                  type="text"
                  onChange={event => setAddress(event.target.value)}
                  value={address}
                />
              </p>
              <p>
                country:
                <input
                  type="text"
                  onChange={event => setCountry(event.target.value)}
                  value={country}
                />
              </p>
              <p>
                city:
                <input
                  type="text"
                  onChange={event => setCity(event.target.value)}
                  value={city}
                />
              </p>
              <p>
                website:
                <input
                  type="text"
                  onChange={event => setWebsite(event.target.value)}
                  value={website}
                />
              </p>
              <input type="submit" value="Submit" />
            </fieldset>
          </form>
        </React.Fragment>
      )}
    </StoreContext.Consumer>
  );
};

export const StoreUpdate = withRouter(StoreUpdateComponent);
