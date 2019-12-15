import React, { useState } from "react";
import "./App.css";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";
import { UserProfile } from "./UserProfile";
import { StoreProfile } from "./StoreProfile";
import { StoreUpdate } from "./StoreUpdate";
import { Route, BrowserRouter } from "react-router-dom";
import { UserContext, initialUserState } from "./Contexts/UserContext";
import { StoreContext, initialStoreState } from "./Contexts/StoreContext";
import { RegistrationPage } from "./RegistrationPage";
import { StartPage } from "./StartPage";

export const App = () => {
  const [user, setUser] = useState(initialUserState);
  const [store, setStore] = useState(initialStoreState);


  return (
    <BrowserRouter>
      <div>
        <UserContext.Provider value={{ user, setUser }}>
        <StoreContext.Provider value={{ store, setStore }}>

          <div className="header">
            <Navbar />
          </div>

          <div className="content">
            <Route exact path="/" component={StartPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/user" component={UserProfile} />
            <Route exact path="/user/store" component={StoreProfile} />
            <Route exact path="/user/store/update" component={StoreUpdate} />
            <Route exact path="/register" component={RegistrationPage} />
          </div>
          </StoreContext.Provider>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
};
