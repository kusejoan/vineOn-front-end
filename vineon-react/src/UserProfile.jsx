import React from "react";
import {UserContext} from "./UserContext";
import "./UserProfile.css";

export const UserProfile = () => (
    <UserContext.Consumer>
        {({user}) => <div>
            <div className = "hello">
            <div> <span>Witaj użytkowniku </span>{user.username} <span>!</span></div>
            </div>
            <div className="label-container">
                <div className="label">
                    <span>Moje wina</span>
                </div>
                <div className="label">
                    <span>Mój ranking</span>
                </div>
                <div className="label">
                    <span>Lista życzeń</span>
                </div>
            </div>
        </div>}
    </UserContext.Consumer>
);
