import React, { useState } from "react";
import "./App.css";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";
import { UserProfile } from "./UserProfile";
import { StoreProfile } from "./StoreProfile";
import { WineProfile } from "./WineProfile";
import { AddWine } from "./AddWine";
import { AllWines } from "./AllWines";
import { StoreUpdate } from "./StoreUpdate";
import { Route, BrowserRouter } from "react-router-dom";
import { UserContext, initialUserState } from "./Contexts/UserContext";
import { StoreContext, initialStoreState } from "./Contexts/StoreContext";
import { WineContext, initialWineState } from "./Contexts/WineContext";
import { RegistrationPage } from "./RegistrationPage";
import { StartPage } from "./StartPage";

export const App = () => {
  const [user, setUser] = useState(initialUserState);
  const [store, setStore] = useState(initialStoreState);
  const [wine, setWine] = useState(initialWineState);

  return (
    <BrowserRouter>
      <div>
        <UserContext.Provider value={{ user, setUser }}>
          <StoreContext.Provider value={{ store, setStore }}>
            <WineContext.Provider value={{ wine, setWine }}>
              <div className="header">
                <Navbar />
              </div>

              <div className="content">
                <Route exact path="/" component={StartPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/wine" component={WineProfile} />
                <Route exact path="/user" component={UserProfile} />
                <Route exact path="/user/store" component={StoreProfile} />
                <Route exact path="/user/addwine" component={AddWine} />
                <Route exact path="/user/getAllWines" component={AllWines} />

                <Route
                  exact
                  path="/user/store/update"
                  component={StoreUpdate}
                />
                <Route exact path="/register" component={RegistrationPage} />
              </div>
            </WineContext.Provider>
          </StoreContext.Provider>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
};
