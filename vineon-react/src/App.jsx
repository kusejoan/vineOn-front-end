import React, { useState } from "react";
import "./App.css";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";
import { UserProfile } from "./UserProfile";
import { Route, BrowserRouter } from "react-router-dom";
import { UserContext, initialUserState } from "./UserContext";
import { RegistrationPage } from "./RegistrationPage";
import { StartPage } from "./StartPage";

export const App = () => {
  const [user, setUser] = useState(initialUserState);

  return (
    <BrowserRouter>
      <div>
        <UserContext.Provider value={{ user, setUser }}>
          <div className="header">
            <Navbar />
          </div>

          <div className="content">
            <Route exact path="/" component={StartPage} />
            <Route exact path="/login_page" component={LoginPage} />
            <Route exact path="/user_profile" component={UserProfile} />
            <Route exact path="/registration_page" component={RegistrationPage} />
          </div>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
};
