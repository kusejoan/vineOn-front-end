import React, { useState } from "react";
import "./App.css";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";
import { UserProfile } from "./UserProfile";
import { Route, BrowserRouter } from "react-router-dom";
import { UserContext, initialUserState } from "./UserContext";

export const App = () => {
  const [user, setUser] = useState(initialUserState);

  return (
      <div className="app">
        <div className="up-header"></div>
      <BrowserRouter>
        <div className="container">
          <UserContext.Provider value={{ user, setUser }}>
            <div className="header">
              <Navbar />
            </div>

            <div className="content">
              <Route exact path="/" component={LoginPage} />
              <Route path="/user_profile" component={UserProfile} />
            </div>
          </UserContext.Provider>
        </div>
      </BrowserRouter>
        <div className="bottom-header"></div>
    </div>

  );
};
