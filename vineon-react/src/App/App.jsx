import React, { useState } from "react";
import "./App.css";
import { LoginPage } from "../LoginPage";
import { Navbar } from "../Navbar";
import { UserProfile } from "../User/UserProfile";
import { StoreProfile } from "../Store/StoreProfile";
import { WineProfile } from "../Wine/WineProfile";
import { AddWine } from "../AddWine";
import { AllWines } from "../Wine/AllWines";
import { StoreUpdate } from "../Store/StoreUpdate";
import { Route, BrowserRouter } from "react-router-dom";
import { UserContext, initialUserState } from "../User/UserContext";
import { StoreContext, initialStoreState } from "../Store/StoreContext";
import { WineContext, initialWineState } from "../Wine/WineContext";
import { RegistrationPage } from "../RegistrationPage";
import { StartPage } from "../StartPage";

export const App = () => {
  const [user, setUser] = useState(initialUserState);
  const [store, setStore] = useState(initialStoreState);
  const [wine, setWine] = useState(initialWineState);

  return (
    <BrowserRouter>
      <div>
        <StoreInfoContext.Provider value={{ storeInfo, setStoreInfo }}>
          <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
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
                    <Route
                      exact
                      path="/user/getAllWines"
                      component={AllWines}
                    />
                    <Route
                      exact
                      path="/user/storesofwine"
                      component={storesOfWine}
                    />
                    <Route
                      exact
                      path="/user/store/update"
                      component={StoreUpdate}
                    />
                    <Route
                      exact
                      path="/register"
                      component={RegistrationPage}
                    />
                  </div>
                </WineContext.Provider>
              </StoreContext.Provider>
            </UserContext.Provider>
          </UserInfoContext.Provider>
        </StoreInfoContext.Provider>
      </div>
    </BrowserRouter>
  );
};
