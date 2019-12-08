import React from "react";
import "./App.css";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";
import { UserProfile } from "./UserProfile";
import { Route, NavLink, BrowserRouter } from "react-router-dom";

export const App = () => (
  <BrowserRouter>
    <div>
      <div className="header">
        <Navbar />
      </div>

      <div className="content">
        <Route exact path="/" component={LoginPage} />
        <Route path="/user_profile" component={UserProfile} />
      </div>
    </div>
  </BrowserRouter>
);
