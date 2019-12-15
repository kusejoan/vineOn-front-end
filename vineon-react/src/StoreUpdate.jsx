import React, { useState } from "react";
import { UserService } from "./user.service";
import { withRouter } from "react-router-dom";
import { UserContext } from "./Contexts/UserContext";
import { StoreContext } from "./Contexts/StoreContext";

const update = (address, city, country, website, history, setStore) => {
  const response = UserService().update(address, city, country, website);
  response
    .then(value => {
      if (value.data.success === true) {
        setStore({
          storeName: value.data.storeName,
          address: value.data.address,
          city: value.data.city,
          country: value.data.country,
          website: value.data.website
        });
        history.push("/user/store");
      }
    })
    .catch(error => console.log(error));
};

const StoreUpdateComponent = ({ history }) => {
  const [storeName, setStoreName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [website, setWebsite] = useState("");

  return (
    <StoreContext.Consumer>
      {({ setStore }) => (
        <React.Fragment>
          <form
            onSubmit={event => {
              event.preventDefault();
              update(address, city, country, website, history, setStore);
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
